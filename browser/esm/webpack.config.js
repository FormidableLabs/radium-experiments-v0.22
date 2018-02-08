'use strict';

const path = require('path');

module.exports = {
  cache: true,
  context: path.join(__dirname, 'src'),
  entry: "./index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'src')],
        loader: 'babel-loader'
      }
    ]
  }
};
