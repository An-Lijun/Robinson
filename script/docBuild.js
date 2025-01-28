const { logNextLone, logSuccess, logLogo,build } = require('./utils');

(function () {
  logLogo();
  logNextLone();
  build();
})();