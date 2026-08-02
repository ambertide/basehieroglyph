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

import { uint10ToUint40 } from '../../../internals/bit-utils';

test.each([
  [[0x2AA, 0x3BC, 0x337, 0x1EE, 0x3FC, 0x00, 0x0, 0x0], [0xAABBCCDDEE, 0xFF00000000]],
  [[0x2AA, 0x3BC, 0x300, 0x000], [0xAABBCC0000]]
])('uint10[] (%s) -> uint40[] (%s)', (testCase, expected) => {
  expect(uint10ToUint40(testCase)).toEqual(expected);
});