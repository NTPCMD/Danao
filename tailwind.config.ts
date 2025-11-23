import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        danaoGold: '#C9A961',
      },
    },
  },
  plugins: [],
};

export default config;
