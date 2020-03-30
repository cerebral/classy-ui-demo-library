module.exports = {
  webpackFinal: async config => {
    config.resolve.extensions.push(".ts");
    config.module.rules[0].test = /\.(ts)$/;
    config.module.rules[0].use[0] = {
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
        plugins: ["classy-ui/plugin"]
      }
    };

    return config;
  },
  stories: ["../stories/**/*.stories.ts"]
};
