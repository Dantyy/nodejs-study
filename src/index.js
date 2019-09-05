const Koa = require('koa');
const app = new Koa();

const bodyParser = require("koa-bodyparser");

const Routes = require('./routes/routes.js');
const routes = new Routes;
const router = routes.router;

routes.get;
routes.post;
routes.put;
routes.delete;

app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);