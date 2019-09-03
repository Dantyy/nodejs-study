
exports.schema = Schema =>{
    const schema = new mongoose.Schemas({
    name: String,
    age: Number
    });
    const MyModel = mongoose.model('test', schema, 'test');
};
