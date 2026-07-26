import {expect, test} from '@jest/globals';

import { encode } from '../encode';

test('Check encoding to be correct', () => {
  expect(encode('cat')).toBe('𓆉𓈗𓀈');
});