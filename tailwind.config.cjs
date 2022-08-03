const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderWidth: { 3: '3px' },
      invert: { 4: '40%' },
      boxShadow: { 'strong': '0 0 4px 0 rgba(0, 0, 0, 0.3)' }
    },
  },

  plugins: [],
};

module.exports = config;
