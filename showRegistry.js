const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
mongoose.connect('mongodb://qa_registry_feed_readwrite:Test1234@qa-registry-feed-82xp1-mongodb.net/qa-registry-feed', {useNewUrlParser: true});

const Schema = mongoose.Schema;
const schema = new Schema;
const MyModel = mongoose.model('feedDetailLog', schema);

MyModel.find({}, {limit:1}, function(err, res) {
    console.log(res);
});    //You can also findOne, findById, update, etc. 

app.listen(3000)