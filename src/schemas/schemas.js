const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/study', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false); //It is necessary for findOneAndUpdate,findOneAndDelete......

const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    age: Number
});
const MyModel = mongoose.model('test', schema, 'test');

module.exports = mongoose;
module.exports = MyModel;