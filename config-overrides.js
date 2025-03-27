module.exports = function override(config, env) {
    // Add your fallback here
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: require.resolve('path-browserify')
    };
    return config;
  };
  