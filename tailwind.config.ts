import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#009B9F',
        accent: '#E07510',
        bases: '#EEF2E8',
        form: '#2222224D',
        input: '#393939',
        zabuton: '#00000066',
        desktop: '#009B9FBF',
        error: '#ff4949',
      },
      spacing: {
        25: '100px',
        30: '120px',
        50: '200px',
        160: '160px',
        350: '350px',
        390: '390px',
      },
    },
  },
  plugins: [],
};
export default config;
