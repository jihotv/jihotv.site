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
        'warm-beige': '#EFECE3',
        'soft-blue': '#8FABD4',
        'deep-blue': '#4A70A9',
        'pure-black': '#000000',
        'gray-900': '#1A1A1A',
        'gray-700': '#4A4A4A',
        'gray-500': '#767676',
        'gray-300': '#D4D4D4',
        'white': '#FFFFFF',
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
      },
      fontFamily: {
        display: ['Pretendard Variable', 'Inter', 'sans-serif'],
        body: ['Noto Sans KR', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(2.5rem, 5vw, 3.5rem)', '1.2'],
        'h2': ['clamp(1.875rem, 4vw, 2.25rem)', '1.2'],
        'h3': ['clamp(1.5rem, 3vw, 1.875rem)', '1.2'],
        'h4': ['1.25rem', '1.2'],
        'body-large': ['1.125rem', '1.6'],
        'body-regular': ['1rem', '1.6'],
        'body-small': ['0.875rem', '1.6'],
        'caption': ['0.75rem', '1.6'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      lineHeight: {
        'tight': '1.2',
        'normal': '1.6',
        'relaxed': '1.8',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
