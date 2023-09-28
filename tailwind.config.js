/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        bg_1: "url('/images_lp/image1.png')",
        bg_2: "url('/images_lp/image2.png')",
      }),
      fontFamily: {
        LDR: ['LDR KAET', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      spacing: {
        1: '8px',
        2: '12px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '48px',
      },
      backgroundImage: {
        bg_1: "url('/images_lp/image1.png')",
        bg_2: "url('/images_lp/image2.png')",
        bg_3: "url('/images_lp/HeroSection_Background.png')",
        'gradient-line': 'linear-gradient(to right, transparent 20%, white 40%, white 60%, transparent 80%)',
      },
      colors: {
        orange: '#CE8C3D',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
