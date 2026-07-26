/**
 * Convert a uint8[] to uint40[] where the memory
 * is considered contigious, for instance:
 * input: [0xFF, 0xAA, 0XBB, 0xCC, 0xDD, 0xCC, 0xDD, 0AA]
 * output: [0xFFAABBCCDD, 0xCCDDAA]
 * @param uint8ts An array of unsigned 8 bit integers.
 * @returns Uint40[] of the same memory
 */
export const uint8toUint40 = (uint8ts: Uint8Array) => (
  uint8ts.reduce(
    (accum, byte, index) => {
      if (index % 5 === 0) {
        // New 40-bit word must be created
        accum.reverse();
        accum.push(BigInt(byte));
        accum.reverse();
      } else {
        // Otherwise we must shift the existing word to left
        // to open up new space for the new byte to be "appended"
        // BigInt conversion required to avoid sign bit dropping
        accum[0] = accum[0] << BigInt(8);
        accum[0] = accum[0] | BigInt(byte);
      }
      return accum;
    },
    [] as bigint[]
  ).reverse()
    .map(Number)
);