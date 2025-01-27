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
// // *****************
// import { AppModule } from './app.module.js'
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
// .eslintrc.js
// export default {
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
// .eslintrc.js
// export default {
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
module.exports = {
  extends: ['next/core-web-vitals'],
  // serverModuleFormat: 'cjs',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn'
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021
  }
};
