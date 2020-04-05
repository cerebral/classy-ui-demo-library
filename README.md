# classy-ui-demo-library

A demo library using classy-ui. Take inspiration from it to build your own library.

## Get started

This library must be transpiled with your application code using Babel.

Install:

```
npm install classy-ui-demo-library
```

## Webpack

You will need to include the library in your transpilation. Given that you already use Webpack with Babel you can do the following:

```ts
{
  module: {
    rules: [
      // React
      {
        test: /\.(tsx?)$/,
        include: /node_modules\/classy-ui-demo-library/,
        use: [babelLoaderSettingsForApp],
      },
      // Angular
      {
        test: /\.ts$/,
        include: /node_modules\/classy-ui-demo-library/,
        use: [babelLoaderSettingsForApp],
      },
      // Vue
      {
        test: /\.vue$/,
        include: /node_modules\/classy-ui-demo-library/,
        use: [babelLoaderSettingsForApp],
      },
    ];
  }
}
```

**babelLoaderSettingsForApp** are the settings you already use to transpile your app with Babel.

## Parcel

Your babel config needs to include:

```ts
// React
{
  "presets": [
    // Even though you do not use Typescript
    ["@babel/preset-typescript", { "isTSX": true, "allExtensions": true }]
  ],
  "plugins": ["classy-ui/plugin"]
}
// Angular
{
  "presets": ["@babel/preset-typescript"],
  "plugins": ["classy-ui/plugin"]
}
// Vue
{
  // Even though you do not use Typescript
  "presets": ["@babel/preset-typescript"],
  "plugins": ["classy-ui/plugin"]
}
```

To include the library with your application code add the following "postinstall" script to package json:

```ts
{
  "scripts": {
    ...,
    "postinstall": "npx symlink-dir ./node_modules/classy-ui-demo-library/src ./components"
  }
}
```

This will symlink the library to a path of your choice, here **./components**. You can now import from this location in your code. You might want to set up an alias to where you put the symlink. For example:

```ts
{
  "paths": {
    "components": "./components/react"
  }
}
```

Aliasing depends on your build tool.

Now you import simply as:

```ts
import { Container } from "components/Container";
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

Run the Angular storybook

```
npm run angular
```

Run the Html storybook

```
npm run html
```
