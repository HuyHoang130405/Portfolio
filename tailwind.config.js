/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      mbs: "320px", // mobile S
      mbm: "375px", // mobile M
      mbl: "425px", // mobile L
      sm: "640px",   // Mobile ngang / nhỏ
      md: "768px",   // Tablet
      lg: "1024px",  // Laptop nhỏ
      xl: "1280px",  // Màn to hơn
      "2xl": "1536px", // Màn cực to
    },
  },
  plugins: [],
}
