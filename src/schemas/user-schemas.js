const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({
    firstName: String,
    lastName: String,
    yourRole: String,
    yourEmail: String,
    phoneNumber: Number,
    cityState: String,
    country: String,
    partnerFirstName: String,
    partnerLastName: String,
    partnerRole: String,
    partnerEmail: String,
});
const userModel = mongoose.model('user', schema, 'user');

module.exports = userModel;