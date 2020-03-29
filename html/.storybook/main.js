module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules[0].test = /\.(ts)$/;
    config.resolve.extensions.push(".ts");

    return config;
  },
  stories: ["../stories/**/*.stories.ts"]
};
