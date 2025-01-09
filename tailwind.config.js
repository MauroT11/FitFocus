/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    styled: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
    themes: [
      {
        mytheme: {
          "primary": "#373A40",
          "secondary": "#686D76",
          "accent": "#f97316",
          "neutral": "#d1d5db",
          "base-100": "#ffffff",
          "info": "#3b82f6",
          "success": "#00ff00",
          "warning": "#fff308",
          "error": "#ff0000",
          "easy": "#30FF25",
          "medium": "#FF8400",
          "hard": "#FF0000",
          },
        },
      ],
    },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  
};
