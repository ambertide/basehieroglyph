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
 * Given an array of 40 bit bitstrings return an array of 8 bit bitstrings,
 * remove the padding at the end.
 * @param uint40 An array of 40 bit bitstrings hold in numbers
 * @returns An array of 8 bit bitstrings
 */
export const uint40ToUint8 = (uint40: number[]): Uint8Array => {
  const uint8sWithPadding = uint40.flatMap(
    u40 => ([
      Number((BigInt(u40) >> 32n) & 0xFFn) >>> 0,
      Number((BigInt(u40) >> 24n) & 0xFFn) >>> 0,
      Number((BigInt(u40) >> 16n) & 0xFFn) >>> 0,
      Number((BigInt(u40) >> 8n) & 0xFFn) >>> 0,
      (u40 & 0xFF) >>> 0
    ])
  );
  uint8sWithPadding.reverse();
  const firstNonPadding = uint8sWithPadding.findIndex(u8 => u8 > 0);
  uint8sWithPadding.splice(0, firstNonPadding);
  const uint8sWithoutPadding = uint8sWithPadding.reverse();
  return new Uint8Array(uint8sWithoutPadding);
};