# react-webpack-configuration

create a folder 
cd folder 

cmd : npm init -y

cmd yarn add 
    "@babel/core": "^7.22.5",
    "@babel/preset-env": "^7.22.5",
    "@babel/preset-react": "^7.22.5",
    "@babel/preset-typescript": "^7.22.5",
    "@emotion/react": "^11.11.1",
    "@types/react": "^18.2.13",
    "@types/react-dom": "^18.2.6",
    "babel-loader": "^9.1.2",
    "css-loader": "^6.8.1",
    "dotenv": "^16.3.1",
    "html-webpack-plugin": "^5.5.3",
    "process": "^0.11.10",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "style-loader": "^3.3.3",
    "ts-loader": "^9.4.3",
    "typescript": "^5.1.3",
    "webpack": "^5.88.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"

tsc --init

go to tsconfig.ts file and uncomment     "jsx": "preserve",  

create a src folder inside folder 
create index.html 
paste this code there 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

create index.css file inside src
create index.tsx file inside src and paste this code 
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
    <App />,
    document.getElementById("root")
);


create App.tsx file and paste this code here
import React from 'react'

const App: React.FC = () => {
    return (
        <div>App</div>
    )
}

export default App


at the last create webpack config.js 
and paste this code there
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

// dotenv configuration settings
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
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
        test: /.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 7000,
    open: true,
    hot: true,
  },
};







