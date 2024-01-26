import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        ttl: '3px 5px 2px rgba(255, 255, 255, 0.25)',
      },
      animation: {
        bounces: 'bounces 1s infinite alternate',
        slide: 'slide 1s infinite alternate',
      },
      keyframes: {
        bounces: {
          '0%, 100%': {
            transform: 'translate(-50% , -10%)',
          },
          '50%': { transform: 'translate(-50% , 0%)' },
        },
        slide: {
          '0%': {
            transform: 'translateX(-15%)',
          },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(15%)' },
        },
      },
      colors: {
        main: '#009B9F',
        accent: '#E07510',
        bases: '#EEF2E8',
        form: '#2222224D',
        input: '#393939',
        zabuton: '#00000066',
        desktop: '#009B9FBF',
        error: '#ff4949',
        bh: '#DA71A2',
        bb: '#D5949A',
      },
      spacing: {
        15: '60px',
        25: '100px',
        30: '120px',
        50: '200px',
        160: '160px',
        250: '250px',
        350: '350px',
        390: '390px',
      },
    },
  },
  plugins: [],
};
export default config;
