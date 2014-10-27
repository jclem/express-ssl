# express-ssl

express-ssl enforces SSL for Express apps. By default, it will not trust proxies
(i.e. by the `x-forwarded-for` header), and it will only be enabled when
`process.env.NODE_ENV === 'production'` is true.

## Use

```javascript
var ssl = require('express-ssl');
var isProduction = process.env.NODE_ENV === 'production';
app.use(ssl(isProduction, { trustProxy: true }));
```

`isProduction` tells express-ssl to be enabled. If there is no argument passed,
it defaults to the value of `process.env.NODE_ENV === 'production'`.

`trustProxy` option tells express-ssl to trust the `x-forwarded-proto` header
from a proxy server (for example, a Heroku app, which is served by Nginx).

## Thanks, Heroku

While I created and maintain this project, it was done while I was an employee
of [Heroku][heroku] on the Human Interfaces Team, and they were kind enough to
allow me to open source the work. Heroku is awesome.

[heroku]: https://www.heroku.com/home
