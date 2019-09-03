const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const Router = require("koa-router");
const router = new Router();
const bodyParser = require("koa-bodyparser");
mongoose.connect('mongodb://localhost/study', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false); //It is necessary for findOneAndUpdate,findOneAndDelete......
    


