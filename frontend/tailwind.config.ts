import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-green": "#007e85",
        "accent-green": "#6aeb36",
        "grey-bg": "#ECECEC",
      },
    },
  },
  plugins: [],
};
export default config;
