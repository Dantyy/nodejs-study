const module = require('module');
const Module = new module;

Schema =>{
    const Schema = mongoose.Schema;
    const schema = new Schema({
    name: String,
    age: Number
});
};

Module.exports = Schema;