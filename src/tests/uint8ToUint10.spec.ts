import {expect, test} from '@jest/globals';

import { uint8toUint10 } from '../uint8ToUint10';

test('Check conversion from 8 bit unsigned array to 10 bit unsigned array', () => {
  const testCase = new Uint8Array([63, 61, 74]);
  expect(uint8toUint10(testCase)).toBe([393, 535, 8]);
});