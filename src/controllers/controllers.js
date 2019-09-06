const MyModel = require('../schemas/schemas');
const bodyParser = require("koa-bodyparser");
module.exports = bodyParser();

const getQuery = async (ctx)=>{
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
};
module.exports = getQuery;

const getParser = async (ctx)=>{
    const id = ctx.params.id;
    console.log(id);
    ctx.body = {
        status: "success",
        opration: "get id",
        id: id,
    };
};
module.exports = getParser;

const createAData = async (ctx)=>{
    const body = ctx.request.body;
    console.log(body);
    const res = await MyModel.create(body);
    ctx.body = {
        status: "success",
        opration: "create",
        res
    };
};
module.exports = createAData;

const updateAData = async (ctx)=>{
    const body = ctx.request.body;
    console.log(body);
    const res = await MyModel.findOneAndUpdate({}, body);
    ctx.body = {
        status: "success",
        opration: "update",
        res
    };
};
module.exports = updateAData;

const deleteAData = async (ctx)=>{
    const res = await MyModel.findOneAndDelete({});
    console.log(res);
    ctx.body = {
        status: "success",
        opration: "delete",
        res
    };
};
module.exports = deleteAData;