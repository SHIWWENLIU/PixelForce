import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '30px',
      },
      colors: {
        'purple-500': '#917AFD', // Adjust the color code as needed
        'custom-purple':'#9E91DA',
        'custom-white':'#F1F1FE',
        'dark-purple-600': '#6246EA', 
        'foundation-blue-dark': '#1A1E25',
        'netural-gray-600':'#475569',
        'netural-gray-0':'#FFF',
        'netural-border-color':'#E3E3E7',
        'nav-grey':'#7D7D88',
        'foundation-white-light-hover':'#FCFCFC',
        'foundation-white-light':'#FDFDFD',
        'foundation-blue-normal':'#222831'
      },
      fontFamily: {
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],
      },
      fontSize: {
        'small':'12px',
        'medium':'14px',
        'base': '16px',
        'large':'24px'
      },
      fontWeight: {
        'normal': '400', 
        'medium': '500', 
        'semi-bold': '600', 
        'bold': '700', 
      },
      lineHeight: {
        'tight': '32px',
      },
      maxWidth: {
        'xs': '160px',
        'custom': '375px',
      },
      screens: {
        'sm': '375px', 
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(136deg, #917AFD 2.61%, #6246EA 96.58%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineClamp: {
        2: '2',
      },
    },
  },
  plugins: [],
};
export default config;
