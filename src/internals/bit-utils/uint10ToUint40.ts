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
 * Convert a uint10[] to uint40[] where the memory
 * is considered contigious, for instance:
 * input: [0b11_1100_1100, 0b11_0000_1111]
 * output: [0x1111_0011_0011_0000_1111]
 * @param uint10[] An array of numbers whose unsigned values are between
 * 0x000 and 0x3FF
 * @returns Uint40[] of the same memory
 */
export const uint10ToUint40 = (uint10ts: number[]) => (
  uint10ts.reduce(
    (accum, word, index) => {
      if (index % 4 === 0) {
        // New 40-bit word must be created
        accum.reverse();
        accum.push(BigInt(word));
        accum.reverse();
      } else {
        // Otherwise we must shift the existing word to left
        // to open up new space for the new byte to be "appended"
        // BigInt conversion required to avoid sign bit dropping
        accum[0] = accum[0] << 10n;
        accum[0] = accum[0] | BigInt(word);
      }
      return accum;
    },
    [] as bigint[]
  ).reverse()
    .map(Number)
);