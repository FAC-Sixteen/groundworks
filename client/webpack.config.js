const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Connect bundle.js to index.html file is dist.

module.exports = {
  entry: ["babel-polyfill", "./index.js"], // The entry point for whole app.
  output: {
    // Here we are telling it where to build when we call Yarn run build
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js" // setting name of bundle file.
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
    port: 3000, // Port for the front end.
    contentBase: "src/",
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
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })] // Connect bundle.js to index.html file is dist.
};
