/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["MyFont", "sans-serif"],
      },
      backgroundImage: {
        mark: "url('/image/mark.png')", // เพิ่ม url() รอบ path
      },
    },
  },
  plugins: [],
};
