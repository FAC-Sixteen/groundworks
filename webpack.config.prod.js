const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Connect bundle.js to index.html file is dist.
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", "./index.js"], // The entry point for whole app.
  output: {
    // Here we are telling it where to build when we call Yarn run build
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js", // setting name of bundle file.
    publicPath: "/" //required for React router
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
  plugins: [
    new CleanWebpackPlugin(), //deletes dist folder before each run or build
    new miniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./public/index.html",
      filename: "index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        API_HOST: "https://groundworks-server.herokuapp.com/"
      }
    })
  ] // Connect bundle.js to index.html file is dist.
};
