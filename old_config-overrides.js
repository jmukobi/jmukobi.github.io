const path = require('path');

module.exports = function override(config, env) {
  config.entry = {
    main: path.resolve(__dirname, 'src/index.js'),
    photography: path.resolve(__dirname, 'src/components/home/PhotographyPage.jsx'),
  };

  config.output = {
    ...config.output,
    filename: 'static/js/[name].js',
  };

  return config;
};