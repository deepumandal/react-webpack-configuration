# react-webpack-configuration

This repository provides a basic setup for a React project using webpack.

## Installation

1. Create a new folder:

```bash
  npm install my-project
  cd my-project
```


2. Initialize a new npm project:
```bash 
  yarn init -y
```

3. Install the dependencies using yarn or npm

```bash
   "@babel/core": "^7.22.5",
   "@babel/preset-env": "^7.22.5",
   "@babel/preset-react": "^7.22.5",
   "@babel/preset-typescript": "^7.22.5",
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
```


4. Generate a TypeScript configuration file:
```bash
  tsc --init
```


5. Open the `tsconfig.json` file and uncomment the line 
```bash
"jsx": "preserve"
```

6. Create a new folder named `src` inside the my-project.

7. Create an `index.html` file inside the `src` folder and paste the following code:
```html
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
```

8. Create an ```index.css``` file inside the src folder.

9. Create an ```index.tsx``` file inside the src folder and paste the following code:
```html
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

```

10. Create an```App.tsx``` file inside the src folder and paste the following code:
```html
import React from 'react'

const App: React.FC = () => {
    return (
        <div>App</div>
    )
}

export default App
```

11. Create a webpack.config.js file in the main folder and paste the following code:

```html
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
```
12. modify package.json 
``` html
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "@babel/core": "^7.22.5",
    "@babel/preset-env": "^7.22.5",
    "@babel/preset-react": "^7.22.5",
    "@babel/preset-typescript": "^7.22.5",
    "@chakra-ui/react": "^2.7.1",
    "@emotion/styled": "^11.11.0",
    "@types/react": "^18.2.13",
    "@types/react-dom": "^18.2.6",
    "@types/react-router-dom": "^5.3.3",
    "babel-loader": "^9.1.2",
    "css-loader": "^6.8.1",
    "dotenv": "^16.3.1",
    "framer-motion": "^10.12.16",
    "html-webpack-plugin": "^5.5.3",
    "process": "^0.11.10",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.13.0",
    "style-loader": "^3.3.3",
    "ts-loader": "^9.4.3",
    "typescript": "^5.1.3",
    "webpack": "^5.88.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  }
}
```

## Authors

- [@deepumandal](https://www.github.com/deepumandal)
