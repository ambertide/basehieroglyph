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

/**
 * Convert a uint8[] to uint40[] where the memory
 * is considered contigious, for instance:
 * input: [0xFF, 0xAA, 0XBB, 0xCC, 0xDD, 0xCC, 0xDD, 0AA]
 * output: [0xFFAABBCCDD, 0xCCDDAA]
 * @param uint8ts An array of unsigned 8 bit integers.
 * @returns Uint40[] of the same memory
 */
export const uint8toUint40 = (uint8ts: Uint8Array) =>
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
      const isLastByte = index === (uint8ts.length - 1);
      if (isLastByte && ((index + 1) % 5 !== 0)) {
        // Pad the last byte with zeroes so it can be
        // safely converted back.
        const remainingBytesInThe40BitBitstring = 5 - ((index + 1) % 5);
        const remainingBitsInThe40BitBitstring = 8n * BigInt(remainingBytesInThe40BitBitstring);
        accum[0] = accum[0] << remainingBitsInThe40BitBitstring;
      }
      return accum;
    },
    [] as bigint[]
  ).reverse()
    .map(Number);