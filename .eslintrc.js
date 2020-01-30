module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'prettier',
    'airbnb-base',
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-confusing-arrow": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "comma-dangle": "off",
    "no-unused-vars": ["error", { "argsIgonorePattern": "next"}],
    // "indent": ["error", 2]
  },
};
