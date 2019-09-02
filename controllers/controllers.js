const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const Router = require("koa-router");
const router = new Router();
const bodyParser = require("koa-bodyparser");

const MyModel = mongoose.model('test', schema, 'test');
