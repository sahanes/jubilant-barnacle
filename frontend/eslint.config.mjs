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
// /** @type {import('eslint').Config} */
// module.exports = {
//   extends: ['next/core-web-vitals'],
//   env: {
//     browser: true,
//     es2021: true,
//     node: true
//   },
//   rules: {
//     '@typescript-eslint/no-unused-vars': 'error'
//   },
//   parserOptions: {
//     sourceType: 'module'
//   }
// };
// const { configs } = require('@eslint/eslintrc');

// /** @type {import('eslint').Linter.Config} */
// module.exports = {
//   extends: ['next/core-web-vitals'],
//   env: {
//     browser: true,
//     es2021: true,
//     node: true
//   },
//   rules: {
//     '@typescript-eslint/no-unused-vars': 'warn'
//   },
//   parserOptions: {
//     sourceType: 'module',
//     ecmaVersion: 2021
//   }
// };
/** @type {import('next').NextConfig} */
const config = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};

export default config;
