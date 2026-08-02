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
 * Given a group of bits as a number and a parameter how many bits
 * we want to capture, treat the bit bundle as a big endian number
 *
 * @param bits Bit bundle as a number.
 * @param getNFromRight Number of bits to get from the right.
 * @return A number created from those bits from the right, indicated
 * as unsigned.
 */
export const getRightMostNBits = (bits: number, getNFromRight: number): number => {
  // we have to create the mask with a bit of wizardary since
  // if I try to NOT 2 << getNFromRight + 1 directly it NOTs the
  // entire 64 bit block to fuck with me.
  const mask = ~((~0 >>> 0) << (getNFromRight));
  return bits & mask;
}; 