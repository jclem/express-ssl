'use strict';

module.exports = function ssl(options) {
  options = options || {};
  var enabled = false;

  if (process.env.NODE_ENV === 'production') {
    enabled = true;
  }

  if (options.disabled === true) {
    enabled = false;
  }

  return sslMiddleware;

  function sslMiddleware(req, res, next) {
    if (!enabled) return next();

    var isSecure = req.secure;

    if (!isSecure && options.trustProxy) {
      isSecure = req.headers['x-forwarded-proto'] === 'https';
    }

    if (isSecure) {
      return next();
    } else if (options.disallow) {
      return options.disallow(req, res);
    }

    res.status(403)
      .type('text/plain')
      .send('Please use HTTPS when communicating with this server.')
      .end();
  }
};
