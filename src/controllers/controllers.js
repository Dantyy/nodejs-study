const MyService = require('../service/service');
const myService = new MyService();

const getQuery = async (ctx) => {
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

const getParser = async (ctx) => {
    const id = ctx.params.id;
    console.log(id);
    ctx.body = {
        status: "success",
        opration: "get id",
        id: id,
    };
};

const createAData = async (ctx) => {
    const body = ctx.request.body;
    console.log(body);
    const res = await myService.createAData(body);
    console.log(res);
    ctx.body = {
        status: "success",
        opration: "create",
        res
    };
};

const updateAData = async (ctx) => {
    const body = ctx.request.body;
    console.log(body);
    const res = await myService.updateAData(body);
    ctx.body = {
        status: "success",
        opration: "update",
        res
    };
};

const deleteAData = async (ctx) => {
    const res = await myService.deleteAData();
    console.log(res);
    ctx.body = {
        status: "success",
        opration: "delete",
        res
    };
};

module.exports = { getQuery, getParser, createAData, updateAData, deleteAData };