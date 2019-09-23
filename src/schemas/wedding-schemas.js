const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({
    firstName: String,
    lastName: String,
    partnerFirstName: String,
    partnerLastName: String,
    phoneNumber: Number,
    weddingDate: Date,
    weddingBudget: Number,
    weddingAddress: String,
    weddingVender: String,
    guestCount: Number,
    receptionSettings: String,
});
const weddingModel = mongoose.model('wedding', schema, 'wedding');

module.exports = weddingModel;