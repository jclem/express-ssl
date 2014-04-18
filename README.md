# express-ssl

express-ssl enforces SSL for Express apps. By default, it will not trust proxies
(i.e. by the `x-forwarded-for` header), and it will only be enabled when
`process.env.NODE_ENV === 'production'` is true.

## Use

```javascript
var ssl = require('express-ssl');
app.use(ssl(useProxy, enable));
```

`useProxy` tells express-ssl to trust the `x-forwarded-proto` header from a
proxy server (for example, a Heroku app, which is served by Nginx).

`enable` tells express-ssl to be enabled. If there is no argument passed, it
defaults to the value of `process.env.NODE_ENV === 'production'`.
