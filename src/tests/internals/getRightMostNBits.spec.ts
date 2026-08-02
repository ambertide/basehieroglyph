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

import {expect, test} from '@jest/globals';

import { getRightMostNBits } from '../../internals/getRightMostNBits';

test.each([
  [0b1011101, 3, 0b101],
  [0b0000000000, 5, 0b00000],
  [0b11111111, 2, 0b11],
  [0b1, 1, 0b1]
])('getRightMostNBits(%i, %i) = %i', (bits, nBits, expected) => {
  expect(getRightMostNBits(bits, nBits)).toBe(expected);
});