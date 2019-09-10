const MyModel = require('../schemas/schemas');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false); //It is necessary for findOneAndUpdate,findOneAndDelete......

module.exports = { getQuery, getParser, createAData, updateAData, deleteAData };

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

const getParser = async (ctx)=>{
    const id = ctx.params.id;
    console.log(id);
    ctx.body = {
        status: "success",
        opration: "get id",
        id: id,
    };
};

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

const deleteAData = async (ctx)=>{
    const res = await MyModel.findOneAndDelete({});
    console.log(res);
    ctx.body = {
        status: "success",
        opration: "delete",
        res
    };
};
