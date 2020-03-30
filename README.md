# classy-ui-demo-library

A demo library using classy-ui

## Get started

This library must be transpiled with your application code using Babel. It is written in Typescript, which means you need the babel Typescript preset as well in your babel config.

Install:

```
npm install classy-ui-demo-library
```

Your babel config has to be, even though you do **NOT** use Typescript (The good thing is that you get typing help no matter):

```ts
{
  "presets": [
    ["@babel/preset-typescript", { "isTSX": true, "allExtensions": true }]
  ],
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
