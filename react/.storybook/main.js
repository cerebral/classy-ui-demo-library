module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // config.module.rules[0].test = /\.(tsx?)$/;
    config.module.rules[0].test = /\.(tsx?)$/;
    config.resolve.extensions.push(".ts", ".tsx");
    console.log(config.resolve);

    return config;
  },
  stories: ["../stories/**/*.stories.tsx"]
};
