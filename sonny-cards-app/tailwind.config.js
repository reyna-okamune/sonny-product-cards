/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
        },
        colors: {
          'my-pink': '#fff2f7',
        }
      },
    },
    plugins: [],
  };
  