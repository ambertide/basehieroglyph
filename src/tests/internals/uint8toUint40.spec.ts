import {expect, test} from '@jest/globals';

import { uint8toUint40 } from '../../internals/uint8toUint40';

test('Check conversion from 8 bit unsigned array to 40 bit unsigned array', () => {
  const testCase = new Uint8Array([0xAA, 0xBB, 0xCC, 0xDD, 0xFF, 0x11, 0x22, 0x33]);
  expect(uint8toUint40(testCase)).toEqual([0xAABBCCDDFF, 0x112233]);
});