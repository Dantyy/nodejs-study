const UserService = require('../service/user-service');
const WeddingService = require('../service/wedding-service');
const userService = new UserService();
const weddingService = new WeddingService();


class weddingControllers {

    async createAWedding (ctx) {
        const body = ctx.request.body;
        const res = await userService.createAUser(body);
        ctx.body = {
            status: "success",
            opration: "create",
            res
        };
    };

    async findAWedding(ctx){
        const body = ctx.request.body;
        const res = await weddingControllers.findAWedding(body);
        console.log(res);
        ctx.body = {
            status: "success",
            opration: "find",
            res
        }
    };


    async updateAWedding (ctx) {
        const body = ctx.request.body;
        const res = await weddingService.updateAWedding(body);
        ctx.body = {
            status: "success",
            opration: "update",
            res
        };
    };

    async deleteAWedding (ctx) {
        const res = await weddingService.deleteAWedding();
        ctx.body = {
            status: "success",
            opration: "delete",
            res
        };
    };
};

module.exports = weddingControllers;