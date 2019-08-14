const Koa = require('koa');
const app = new Koa();

app.use(async ctx=>{
    ctx.body = 'The program is running on port 3000'
});

app.listen(3000);