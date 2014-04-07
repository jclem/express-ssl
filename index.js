'use strict';

module.exports = function(useProxy, enable) {
  if (typeof enable === 'undefined') {
    enable = process.env.NODE_ENV === 'production';
  }

  return middleware;

  function middleware(req, res, next) {
    if (!enable) return next();

    var isSecure = req.secure;

    if (!isSecure && useProxy) {
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
