import {expect, test} from '@jest/globals';

import { decode } from '../decode';

test('Check decoding to be correct', () => {
  expect(decode('cat')).toBe('cat');
});