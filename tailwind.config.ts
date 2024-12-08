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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'column-up': 'move-up 18s linear infinite',
        'column-down': 'move-down 18s linear infinite',
      },
      keyframes: {
        // Animation for moving up (out of view at the top and then reappearing from the bottom)
        'move-up': {
          '0%': { transform: 'translateY(0%)' },         // Start position
          '100%': { transform: 'translateY(-50%)' },   // Move up and disappear
        },
        // Animation for moving down (out of view at the bottom and then reappearing from the top)
        'move-down': {
          '0%': { transform: 'translateY(-0%)' },         // Start position
          '100%': { transform: 'translateY(50%)' },    // Move down and disappear
        },
      },
    },
  },
  plugins: [],
};

export default config;
