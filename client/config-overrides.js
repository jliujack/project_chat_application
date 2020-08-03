module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.output.publicPath = "/chat/";
  return config;
};
