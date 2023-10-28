/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "5rem",
      },
      height: {
        '128': '30rem',
        
      },
      colors: {
        primary: {
          100: "#7a1d1d",
          500: "#741b1b",
          900: "#5a0e0e",
        },
        secondary: "#7630a1"
      },
      
    }, 
  },
  plugins: [],
};
