module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules[0].test = /\.(tsx?)$/;
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
  stories: ["../stories/**/*.stories.tsx"]
};
