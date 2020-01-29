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
    "class-method-use-this": "off",
    "no-param-reasign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgonorePattern": "next"}]
  },
};
