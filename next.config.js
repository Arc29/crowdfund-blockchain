module.exports = {
  distDir: "functions/next",
  webpack(cfg) {
    cfg.plugins = cfg.plugins.filter(plugin => {
      if (plugin.constructor.name === 'UglifyJsPlugin') {
        return false;
      } else {
        return true;
      }
    });

    return cfg;
  }
}