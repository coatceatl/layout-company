const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(otf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
        }
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
};

