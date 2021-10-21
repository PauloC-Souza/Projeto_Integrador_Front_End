module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    env: {
        node: true,
      },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2020,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
    },
    overrides: [
        {
          files: [
            '**/__tests__/*.{j,t}s?(x)',
            '**/tests/unit/**/*.spec.{j,t}s?(x)',
          ],
          env: {
            jest: true,
          },
        },
      ],
};