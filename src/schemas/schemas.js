const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    age: Number
});

exports.MyModel = mongoose.model('test', schema, 'test');

