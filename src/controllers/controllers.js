

class controllers {
    //get the parameter. 
    async getQuery (ctx) {
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

    //get the id.
    async getParser (ctx) {
        const id = ctx.params.id;
        console.log(id);
        ctx.body = {
            status: "success",
            opration: "get id",
            id: id,
        };
    };
}

module.exports = controllers ;