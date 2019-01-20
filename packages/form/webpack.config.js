const webpack = require('webpack');
const path = require('path');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      '@react-scale/core': path.resolve('../core'),
    },
  },
  externals: {
    '@react-scale/core': '@react-scale/core',
  },
  plugins: [
    new DuplicatePackageCheckerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  target: 'web',
};
