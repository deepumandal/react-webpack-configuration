const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

// dotenv configuration settings
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        ...dotenv.parsed,
        NODE_ENV: JSON.stringify(isProduction ? "production" : "development"),
      }),
    }),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|scss|sass|less)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      ,
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};
