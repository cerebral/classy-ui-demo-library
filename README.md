# classy-ui-demo-library

A demo library using classy-ui

## Get started

This library must be transpiled with your application code.

## Using webpack

Install:

```
npm install classy-ui-demo-library classy-ui@beta webpack-cli webpack-dev-server @babel/core babel-loader clean-webpack-plugin html-webpack-plugin --save-dev
```

### React

Install:

```
npm install @babel/preset-react --save-dev
```

```ts
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!classy-ui-demo-library)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["classy-ui/plugin"],
            presets: ["@babel/react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```
And in your **package.json** add the following script:
```
{
  "scripts": {
    "start": "webpack-dev-server",
  }
}
```

## Development

Run the React storybook

```
npm run react
```

Run the Vue storybook

```
npm run vue
```
