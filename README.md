# express-ssl

express-ssl enforces SSL for Express apps.

## Use

```javascript
var ssl = require('express-ssl');
app.use(ssl(useProxy, enable));
```

`useProxy` tells express-ssl to trust the `x-forwarded-proto` header from a
proxy server (for example, a Heroku app, which is served by Nginx).

`enable` tells express-ssl to be enabled. If there is no argument passed, it
defaults to the value of `process.env.NODE_ENV === 'production'`.
