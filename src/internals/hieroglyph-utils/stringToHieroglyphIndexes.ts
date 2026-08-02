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

import { HieroglyphIndexError } from './HieroglpyhIndexError';

export const stringToHieroglyphIndexes = (hieroglpyhString: string): number[] => {
  const codePoints = Array.from(hieroglpyhString)
    .map(hierostring => hierostring.codePointAt(0));
  if (codePoints.some(codePoint => typeof codePoint === 'undefined' || codePoint < 0x13000 || codePoint > (0x13000 + 0x3FF))) {
    throw new HieroglyphIndexError('Invalid hierostring.');
  }
  return (codePoints as number[]).map(codePoint => codePoint - 0x13000);
};