module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules[0].test = /\.(tsx?)$/;
    config.module.rules[0].use[0].options = {
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
      ],
      plugins: ["classy-ui/plugin"]
    };

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
  stories: ["../stories/**/*.stories.tsx"]
};
