const Koa = require('koa');
const app = new Koa();

const bodyParser = require("koa-bodyparser");

const Routes = require('./routes/routes.js');
const routes = new Routes;

routes.getName;
routes.getId;
routes.postCreate;
routes.putUpdate;
routes.delDelete;

app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);