const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/',
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
            'react'
          ],
          plugins: ['transform-class-properties']
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/[name].[ext]',
              limit: 5000
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './node_modules/monaco-editor/min/vs',
        to: 'vs',
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  performance: {
    hints: false,
  }
};
