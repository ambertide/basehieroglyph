import {expect, test} from '@jest/globals';

import { decode } from '../decode';

test('Check decoding to be correct', () => {
  expect(decode('𓆉𓈗𓀈')).toBe('cat');
});