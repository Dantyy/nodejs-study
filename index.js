const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://qa_registry_feed_readwrite:Test1234@qa-registry-feed-82xp1.mongodb.net/qa-registry-feed', {useNewUrlParser: true});
const Router = require("koa-router");
const router = new Router;

const Schema = mongoose.Schema;
const schema = new Schema;
const MyModel = mongoose.model('feedDetailLog', schema, 'feedDetailLog');

app.use(router.routes());

app.use(async ctx=>{
    // ctx.body = 'The program is running on port 3000'
    const res = await  MyModel.findOne({});
    ctx.body = res;
    router.get('/api/registry');
    // ctx.body = res;
});

app.listen(3000);