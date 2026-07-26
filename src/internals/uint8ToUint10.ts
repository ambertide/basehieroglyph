import { uint8toUint40 } from './uint8toUint40';

/**
 * Last uint40t in a uint40t[] may have been created
 * by less than 5 uint8ts, since our main goal is to
 * convert uint8t[] to uint10t[] this may create
 * a number of undesirable uint10ts, to avoid
 * this we take this tail and than convert it to
 * the correct number of uint10ts, so for instance:
 * 
 * 1 uint8t -> 1 uint10t
 * 2 uint8t -> 2 uint10t,
 * 3 uint8t -> 3 uint10t,
 * @param uint40t Uint40t to convert
 * @param tailSize Tail size.
 * @returns uint10t[]
 */
const processTail = (uint40t: number, tailSize: number): number[] =>
  [...new Array(tailSize).keys()]
    .reverse()
    .map(i => (uint40t >>> i) & 0b11_1111_1111);

/**
 * Convert an array of unsigned 8 bit numbers to an array
 * of unsigned 10 bit numbers, taking the array to mean
 * contigious bytes in memory.
 * 
 * For example:
 * 
 * input: [2, 4] means 0000 0010 / 0000 0100
 * and must yield output: 0000 0010 00 / 0000 0001 00 or [4, 4],
 * notice the last number being padded from left.
 * @param uint8ts Input array of 8 bit unsigned integers
 * @returns Output array of 10 bit unsigned integers.
 */
export const uint8toUint10 = (uint8ts: Uint8Array): number[] => {
  // Convert uint8t[] to uint40t[]
  const uint40ts = uint8toUint40(uint8ts);
  const tailSize = uint8ts.length % 5;
  // Now, split those uint40ts to 4 uint10ts
  const uint10ts = uint40ts.flatMap((uint40t, index) => (
    tailSize && index === uint40ts.length - 1
      ? processTail(uint40t, tailSize)
      : [
        (uint40t >>> 30) & 0b11_1111_1111,
        (uint40t >>> 20) & 0b11_1111_1111,
        (uint40t >>> 10) & 0b11_1111_1111,
        uint40t & 0b11_1111_1111
      ]));
  return [...uint10ts];
};
