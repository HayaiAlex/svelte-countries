const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          600: '#2b3743',
          700: '#202d36',
          800: '#1e2a34',
        },
      },
      borderWidth: { 3: '3px' },
      boxShadow: { 'strong': '0 0 4px 0 rgba(0, 0, 0, 0.3)' }
    },
  },

  plugins: [],
};

module.exports = config;
