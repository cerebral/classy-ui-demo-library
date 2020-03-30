module.exports = {
  webpackFinal: async config => {
    config.module.rules[2].use.push({
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/env",
          [
            "@babel/typescript",
            {
              isTSX: true,
              allExtensions: true
            }
          ]
        ],
        plugins: [
          [
            "@babel/plugin-proposal-decorators",
            {
              legacy: true
            }
          ],
          "@babel/plugin-proposal-class-properties",
          "classy-ui/plugin"
        ]
      }
    });
    return config;
  },
  stories: ["../stories/**/*.stories.ts"]
};
