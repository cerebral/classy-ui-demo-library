module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules[2].use.push({
      loader: "babel-loader"
    });
    return config;
  },
  stories: ["../stories/**/*.stories.ts"]
};
