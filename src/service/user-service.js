const userModel = require('../schemas/user-schemas');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false); //It is necessary for findOneAndUpdate,findOneAndDelete......

class userService {
    async createAUser (user) {
        const res = await userModel.create(user);
        return res;
    };

    async updateAUser (user) {
        const res = await userModel.findOneAndUpdate({}, user);
        return res;
    };

    async deleteAUser () {
        const res = await userModel.findOneAndDelete({});
        return res;
    };
    
}

module.exports = userService;