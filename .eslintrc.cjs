const baseRules = require('./rules/base.cjs');
const reactRules = require('./rules/react.cjs');
const importRules = require('./rules/import.cjs');
const typescriptRule = require('./rules/typescriptEslint.cjs');

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import', 'jest', 'sort-keys'],
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...baseRules,
    ...importRules,
    ...typescriptRule,
    ...reactRules,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
};
