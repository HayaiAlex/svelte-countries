const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      borderWidth: { DEFAULT: '1px', 0: '0', 2: '2px', 3: '3px' },
    },
  },

  plugins: [],
};

module.exports = config;
