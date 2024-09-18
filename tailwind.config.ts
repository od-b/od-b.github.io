import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        /* custom color theme */
        "nougat": {
          50: "#F3F3F2",
          100: "#E9E9E7",
          200: "#CECFC9",
          300: "#AEAFA6",
          400: "#86897C",
          500: "#3C3D37",
          600: "#373833",
          700: "#373833",
          800: "#2F302C",
          900: "#2F302C",
          950: "#282824"
        }
      },
    },
  },
  
  plugins: [],
};

export default config;
