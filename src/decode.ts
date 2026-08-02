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

import { stringToHieroglyphIndexes } from './internals';
import { uint10ToUint40, uint40ToUint8 } from './internals/bit-utils';

export const decode = (encodedString: string): string => {
  const u10Indexes = stringToHieroglyphIndexes(encodedString);
  const u8Codepoints = uint40ToUint8(uint10ToUint40(u10Indexes));
  return new TextDecoder().decode(new Uint8Array(u8Codepoints));
};