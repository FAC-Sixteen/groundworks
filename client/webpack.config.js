const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'},
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  devServer: {
    port: 3000,
    contentBase: 'src/',
    compress: true,
    hot: true,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [ new HtmlWebpackPlugin({ template: './public/index.html'})]
}
