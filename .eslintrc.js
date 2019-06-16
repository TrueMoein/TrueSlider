module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['airbnb-base', "plugin:prettier/recommended"],
  plugins: ["prettier"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "endOfLine":"auto"
      }
    ],
    "no-param-reassign": ["error", { "props": false }],
    "no-restricted-syntax": 0,
    "import/no-extraneous-dependencies": 0,
    "linebreak-style": 0
  },
};
