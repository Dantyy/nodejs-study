const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/study', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false); //It is necessary for findOneAndUpdate,findOneAndDelete......
const Schemas = require('../schemas/schemas.js')
const MyModel = new Schemas.MyModel;

const getQuery = async (ctx)=>{
    const name = ctx.query.name;
    const age = ctx.query.age;
    ctx.body = {
        status: "success",
        opration: "get parameters",
        name: name,
        age: age
    };
};
module.exports = getQuery;

const getId = async (ctx)=>{
    const id = ctx.params.id;
    console.log(id);
    ctx.body = {
        status: "success",
        opration: "get id",
        id: id,
    };
};
module.exports = getId;

const insertAData = async (ctx)=>{
    const body = ctx.request.body;
    console.log(body);
    const res = await MyModel.create(body);
    ctx.body = {
        status: "success",
        opration: "create",
        res
    };
};
module.exports = insertAData;

const updateAData =  async (ctx)=>{
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