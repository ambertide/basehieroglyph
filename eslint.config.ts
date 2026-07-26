import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
// @ts-expect-error: I am not gonna deal with this.
import licenseHeader from 'eslint-plugin-license-header';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
      js,
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/semi': 'error',
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single']
    },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    ignores: ['jest.config.ts', 'eslint.config.ts'],
    plugins: {
      'license-header': licenseHeader
    },
    rules: {
      'license-header/header': [
        'error',
        [
          '/**',
          '@ambertide/basehieroglyph',
          'Copyright (C) 2026  Ege Özkan',
          '',
          'This program is free software: you can redistribute it and/or modify',
          'it under the terms of the GNU General Public License as published by',
          'the Free Software Foundation, either version 3 of the License, or',
          '(at your option) any later version.',
          '',
          'This program is distributed in the hope that it will be useful,',
          'but WITHOUT ANY WARRANTY; without even the implied warranty of',
          'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the',
          'GNU General Public License for more details.',
          '',
          'You should have received a copy of the GNU General Public License',
          'along with this program.  If not, see <http://www.gnu.org/licenses/>.',
          '*/'
        ]
      ]
    }
  },
  globalIgnores(['**/dist/', '**/types/'])
]);
