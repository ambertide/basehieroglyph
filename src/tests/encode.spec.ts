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

import { encode } from '../encode';

test.each([
  ['cat', '𓆍𓈗𓄀𓀀'],
  ['test', '𓇑𓉗𓃝𓀀'],
  ['a significantly longer text', '𓆄𓈇𓃚𓅧𓆹𓊖𓆚𓅣𓆅𓋧𓄛𓁹𓂁𓋆𓏛𓉧𓆕𓌢𓀝𓁥𓇡𓍀𓀀𓀀'],
  ['şöme text wıth nön-latın çarağterş', '𓌖𓇼𓃭𓉭𓆔𓈇𓄙𓅸𓇐𓈇𓇱𓂱𓇑𓊂𓀛𓋃𓋙𓋢𓍛𓁡𓇓𓁋𓁛𓈠𓌎𓉶𓁜𓉡𓌒𓇷𓄙𓅲𓌖𓇰𓀀𓀀']
])('encode(%s) = %s', async (plain, cypher) => {
  expect(await encode(plain)).toBe(cypher);
});