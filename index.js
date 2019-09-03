const Schemas = require('./schemas/schemas.js');
const schema = Schemas.schema;

const Routes = require('./routes/routes.js');
const routes = new Routes;



app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);