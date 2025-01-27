// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];
/** @type {import('eslint').Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error'
  },
  parserOptions: {
    sourceType: 'module'
  }
};
