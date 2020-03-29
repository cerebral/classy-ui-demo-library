# classy-ui-demo-library

A demo library using classy-ui

## Get started

This library must be transpiled with your application code using Babel. It is written in Typescript, which means you need the babel Typescript preset as well.

Install:

```
npm install classy-ui-demo-library classy-ui@beta
```

## Using webpack

Merge the following configuration with your existing:

### React

```ts
{
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  rules: [
    {
      test: /\.(tsx?)$/,
      include: /node_modules\/classy-ui-demo-library/,
      use: {
        loader: "babel-loader",
        options: {
          plugins: ["classy-ui/plugin"],
          presets: [
            "@babel/env",
            [
              "@babel/typescript",
              {
                isTSX: true,
                allExtensions: true
              }
            ],
            "@babel/react"
          ]
        }
      }
    }
  ];
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

Run the Angular storybook

```
npm run angular
```

Run the Html storybook

```
npm run html
```
