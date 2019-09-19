const MyService = require('../service/service');
const myService = new MyService();

class controllers {
    //get the parameter. 
    getQuery = async (ctx) => {
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
        return this.getQuery;
    };

    getParser = async (ctx) => {
        const id = ctx.params.id;
        console.log(id);
        ctx.body = {
            status: "success",
            opration: "get id",
            id: id,
        };
        return this.getParser;
    };

    createAData = async (ctx) => {
        const body = ctx.request.body;
        console.log(body);
        const res = await myService.createAData(body);
        console.log(res);
        ctx.body = {
            status: "success",
            opration: "create",
            res
        };
        return this.createAData;
    };

    updateAData = async (ctx) => {
        const body = ctx.request.body;
        console.log(body);
        const res = await myService.updateAData(body);
        ctx.body = {
            status: "success",
            opration: "update",
            res
        };
        return this.updateAData;
    };

    deleteAData = async (ctx) => {
        const res = await myService.deleteAData();
        console.log(res);
        ctx.body = {
            status: "success",
            opration: "delete",
            res
        };
        return this.deleteAData;
    };
}

module.exports = controllers ;