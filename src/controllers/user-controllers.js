const UserService = require('../service/user-service');
const userService = new UserService();

class userControllers {
    async createAUser (ctx) {
        const body = ctx.request.body;
        const res = await userService.createAUser(body);
        ctx.body = {
            status: "success",
            opration: "create",
            res
        };
    };

    async updateAUser (ctx) {
        const body = ctx.request.body;
        const res = await userService.updateAUser(body);
        ctx.body = {
            status: "success",
            opration: "update",
            res
        };
    };

    async deleteAUser (ctx) {
        const res = await userService.deleteAUser();
        ctx.body = {
            status: "success",
            opration: "delete",
            res
        };
    };
};

module.exports = userControllers;