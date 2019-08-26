const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const Router = require("koa-router");
const router = new Router();
const bodyParser = require("koa-bodyparser");
mongoose.connect('mongodb://localhost/testDB', {useNewUrlParser: true});


app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

router.post('/api/create/', async ctx=>{
    const name = ctx.query.name;
    //如何插入到mongoDB??

    ctx.body={
        status:"success",
        name: name
    };
});
app.listen(3000);



// const Schema = mongoose.Schema;
// const MyModel = mongoose.model('testDB', schema, 'testDB');

// router.get('/api/registry/:id', async (ctx) =>{
//     const id = ctx.params.id;
    //获取参数
    // const firstName = ctx.query.first_name;
    // const lastName = ctx.query.last_name;
    
    //将获取的参数从接口返回
    // ctx.body = {
    //     status: 'success',
    //     id: id,
    //     // data: {
    //     //     firstName,
    //     //     lastName,
    //     // },
    // };
    // const res = await MyModel.findOne({});
    // ctx.body = res;
// });