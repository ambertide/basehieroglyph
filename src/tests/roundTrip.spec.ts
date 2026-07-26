import {expect, test} from '@jest/globals';

import { encode } from '../encode';
import { decode } from '../decode';

test('Check text can be encoded and decoded right back', () => {
  expect(decode(encode('cat'))).toBe('cat');
});