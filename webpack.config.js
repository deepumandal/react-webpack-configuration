const path = require("path");
const HtmlWebpack = require("html-webpack-plugin");
module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, ".bundles"),
  },
  plugins: [
    new HtmlWebpack({
      template: "./index.html",
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
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
