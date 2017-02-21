const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './public/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    }
  }