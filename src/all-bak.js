const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const Router = require("koa-router");
const router = new Router();
const bodyParser = require("koa-bodyparser");
mongoose.connect('mongodb://localhost/study', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false); //It is necessary for findOneAndUpdate,findOneAndDelete......

const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    age: Number
});
const MyModel = mongoose.model('test', schema, 'test');

app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

//get方法取参：
router.get('/api/get', async (ctx)=>{
    const name = ctx.query.name;
    const age = ctx.query.age;
    console.log(name);
    console.log(age);
    ctx.body = {
        status: "success",
        opration: "get parameters",
        name: name,
        age: age
    };
});

//get方法取id：
router.get('/api/get/:id', async (ctx)=>{
    const id = ctx.params.id;
    console.log(id);
    ctx.body = {
        status: "success",
        opration: "get id",
        id: id,
    };
});

//post方法 请求MongoDB数据库插入数据：
router.post('/api/create', async (ctx)=>{
    const body = ctx.request.body;
    console.log(body);
    const res = await MyModel.create(body);
    ctx.body = {
        status: "success",
        opration: "create",
        res
    };
});

//put方法 请求MongoDB数据库更新数据：
router.put('/api/update', async (ctx)=>{
    const body = ctx.request.body;
    console.log(body);
    const res = await MyModel.findOneAndUpdate({}, body);
    ctx.body = {
        status: "success",
        opration: "update",
        res
    };
});

//put方法 请求MongoDB数据库删除数据：
router.del('/api/delete', async (ctx)=>{
    const res = await MyModel.findOneAndDelete({});
    console.log(res);
    ctx.body = {
        status: "success",
        opration: "delete",
        res
    };
});


app.listen(3000);







//mongoose.connect('mongodb://172.26.10.138:27017/study', {useNewUrlParser: true});