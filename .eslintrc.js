module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['airbnb-base', "plugin:flowtype/recommended"],
  "plugins": [
    "flowtype"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-param-reassign": ["error", { "props": false }],
    "no-restricted-syntax": 0,
    "import/no-extraneous-dependencies": 0
  },
};
