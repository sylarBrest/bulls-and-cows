import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['src/**/*.ts'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
  },
  tseslint.configs.recommended,
  eslintConfigPrettier,
]);
