const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'config.js', '.json'],
    alias: {
      '@components': path.resolve(__dirname, './app/components'),
      '@utils': path.resolve(__dirname, './app/utils'),
    },
  },
};
