const userModel = require('../schemas/user-schemas');
const weddingModel = require('../schemas/wedding-schemas');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false); //It is necessary for findOneAndUpdate,findOneAndDelete......

class weddingService {
    async createAWedding (user) {
        const res = await userModel.create(user);
        return res;
    };

    async findAWedding () {
        const res = await userModel.findOne({});
        return res;
    };

    async updateAWedding (user) {
        const res = await weddingModel.findOneAndUpdate({}, user);
        return res;
    };

    async deleteAWedding () {
        const res = await weddingModel.findOneAndDelete({});
        return res;
    };
    
}

module.exports = weddingService;