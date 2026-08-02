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

import { stringToHieroglyphIndexes } from '../../../internals/hieroglyph-utils';

test.each([
  ['𓀀𓏿', [0x0, 0x3FF]],
])('stringToHieroglyphIndexes(%s) = %p', (hierostring, indexArray) => {
  expect(stringToHieroglyphIndexes(hierostring)).toEqual(indexArray);
});
