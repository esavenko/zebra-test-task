/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': OFF,
    'object-curly-spacing': [ WARN, 'always' ],
    'array-bracket-spacing': [ WARN, 'always' ],
    'comma-dangle': [ 0, 'always' ],
    'vue/require-valid-default-prop': OFF,
    'vue/no-v-html': OFF,
    'vue/no-multiple-template-root': OFF,
    'vue/require-toggle-inside-transition': OFF,
    'semi': [ 1, 'always' ],
    'quotes': [ ERROR, 'single', { 'avoidEscape': true } ]
  },
};
