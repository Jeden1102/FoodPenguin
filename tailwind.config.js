module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'orange':'#F47321',
        'orange-strong':'#fa6a11',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
