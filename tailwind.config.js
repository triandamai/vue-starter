module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens:{
      'tablet':'640px',
      'laptop' : '1024px',
      'desktop' : '1280px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  
};
