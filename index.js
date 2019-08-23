const Koa = require('koa');
const app = new Koa();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://qa_registry_feed_readwrite:Test1234@qa-registry-feed-82xp1.mongodb.net/qa-registry-feed', {useNewUrlParser: true});
const Router = require("koa-router");
const router = new Router;

// const Schema = mongoose.Schema;
// const schema = new Schema;
// const MyModel = mongoose.model('feedDetailLog', schema, 'feedDetailLog');

app.use(router.routes());
router.get('/api/registry', async ctx =>{
    //获取参数
    // const firstName = ctx.query.first_name;
    // const lastName = ctx.query.last_name;
    const id = ctx.query.ID;

    //将获取的参数从接口返回
    ctx.body = {
        status: 'success',
        id: id,
        // data: {
        //     firstName,
        //     lastName,
        // },
    };
    // const res = await MyModel.findOne({});
    // ctx.body = res;
});


app.listen(3000);