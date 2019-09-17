const MyModel = require('../schemas/schemas');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false); //It is necessary for findOneAndUpdate,findOneAndDelete......

class MyService {
    async createAData (data) {
        const res = await MyModel.create(data);
        return res;
    };

    async updateAData (data) {
        const res = await MyModel.findOneAndUpdate({}, data);
        return res;
    };

    async deleteAData () {
        const res = await MyModel.findOneAndDelete({});
        return res;
    };
    
}

module.exports = MyService;
