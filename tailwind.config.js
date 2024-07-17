/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        carDoctorTheme: {
          "primary": "#FF3811",
          "secondary": "#151515",
          ".btn-primary":{
            "color":"#fff"
          },
          ".btn-outline.btn-primary:hover":{
            "color":"#fff"
          }
        },
      },
      "dark",
      "cupcake",
      "light"
    ],
  },
};
