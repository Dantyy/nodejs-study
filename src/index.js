const Koa = require('koa');
const app = new Koa();
const router = require('./routes');
const bodyParser = require('./controllers/controllers');


app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
