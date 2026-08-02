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

import { uint8toUint40 } from '../../internals/uint8toUint40';

test.each([
  [[0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF], [0xAABBCCDDEE, 0xFF]],
  [[0xAA, 0xBB, 0xCC, 0xDD, 0xFF, 0x11, 0x22, 0x33], [0xAABBCCDDFF, 0x112233]],
  [[0xAA, 0xBB], [0xAABB]]
])('uint8[] (%s) -> uint40[] (%s)', (input, expected) => {
  const testCase = new Uint8Array(input);
  expect(uint8toUint40(testCase)).toEqual(expected);
});