/**
@ambertide/basehieroglyph
Copyright (C) 2026  Ege Özkan

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import { getRightMostNBits } from './getRightMostNBits';
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
const processTail = (uint40t: number, tailSize: number): number[] => {
  // Consider how many 10 bits we can take from left
  // and how many bits from right is our  remainder.
  const fullTenBitCount = (tailSize * 8) / 10;
  const tailsTailSize = (tailSize * 8) % 10;
  const tailsTail = getRightMostNBits(uint40t, tailsTailSize);
  const fullTenBitParts = [...new Array(Math.floor(fullTenBitCount)).keys()]
    .reverse()
    .map(shiftIndex => getRightMostNBits(
      uint40t >>> (tailsTailSize + shiftIndex * 10),
      10
    ));
  return [...fullTenBitParts, tailsTail];
};


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
        Number((BigInt(uint40t) >> 30n)) & 0b11_1111_1111,
        (uint40t >>> 20) & 0b11_1111_1111,
        (uint40t >>> 10) & 0b11_1111_1111,
        uint40t & 0b11_1111_1111
      ]));
  return [...uint10ts];
};
