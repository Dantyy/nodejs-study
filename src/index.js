const Koa = require('koa');
const app = new Koa();
const Router = require('./routes');
const router = new Router();
const BodyParser = require('./controllers/controllers');
const bodyParser = new BodyParser();

app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
