const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Connect bundle.js to index.html file is dist.
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ["babel-polyfill", "./index.js"], // The entry point for whole app.
  output: {
    // Here we are telling it where to build when we call Yarn run build
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js", // setting name of bundle file.
    publicPath: '/' //required for React router
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] }, // It enables use of these dependencies with these langauges / files
      { test: /\.css$/, use: ["style-loader", "css-loader"] } // It enables use of these dependencies with these langauges / files
    ]
  },
  node: {
    fs: "empty",
    net: "empty"
  },
  devServer: {
    historyApiFallback: true, //goes back to hompage if uncaught exception, also required for React Router
    port: 3000, // Port for the front end.
    contentBase: "/src",
    compress: true, // compresses thr file
    hot: true, //auto reload.
    https: false,
    proxy: {
      "/api": {
        // when on front end an API call is made, starting with "/api". these following lines will delete "api" part and replace with target line
        target: "http://localhost:8080",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true, // changeOrigin allows you to change from port 3000 to 8080. Switch from front to back.
        secure: false
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),   //deletes dist folder before each run or build
    new miniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./public/index.html",
      filename: 'index.html'})] // Connect bundle.js to index.html file is dist.
};
