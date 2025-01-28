// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure Tailwind scans all your files for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Custom primary color (blue)
        secondary: '#10b981', // Custom secondary color (green)
        danger: '#ef4444', // Custom danger color (red)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter font (or any other Google Font)
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
