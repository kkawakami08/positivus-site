/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { "space-grotesk": ["var(--font-space-grotesk)"] },
      colors: {
        brand: {
          green: "#B9FF66",
          black: "#191A23",
          gray: "#F3F3F3",
          "light-gray": "#292A32",
        },
      },
    },
  },
};
