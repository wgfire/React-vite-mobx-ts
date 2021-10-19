module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    "max-len": ["off", { code: 120 }],
    "block-spacing": ["error", "always"],
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    quotes: [1, "double"],
    "prettier/prettier": "off",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "react/react-in-jsx-scope": "off",
  },
};
