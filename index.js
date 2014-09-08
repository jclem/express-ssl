'use strict';

module.exports = function(enabled, options) {
  options = options || {};

  if (typeof enabled === 'object') {
    options = enabled;
    enabled = undefined;
  }

  if (enabled === undefined) {
    enabled = process.env.NODE_ENV === 'production';
  }

  return middleware;

  function middleware(req, res, next) {
    if (!enabled) return next();

    var isSecure = req.secure;

    if (!isSecure && options.trustProxy) {
      isSecure = req.headers['x-forwarded-proto'] === 'https';
    }

    if (isSecure) {
      next();
    } else {
      if (req.method === 'GET') {
        res.redirect(301, 'https://' + req.headers.host + req.originalUrl);
      } else {
        res.end(403, 'Please use HTTPS when communicating with this server');
      }
    }
  }
};
