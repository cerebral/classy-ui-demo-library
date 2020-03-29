module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules[0].test = /\.(js|tsx?)$/;
    config.resolve.extensions.push(".ts", ".tsx");

    const vueLoader = config.module.rules.find(
      loader => loader.loader && loader.loader.includes("vue-loader")
    );
    config.module.rules.splice(config.module.rules.indexOf(vueLoader), 1);
    config.module.rules.unshift(vueLoader);

    return config;
  },
  stories: ["../stories/**/*.stories.js"]
};
