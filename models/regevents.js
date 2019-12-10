const Joi = require('joi');
const mongoose = require('mongoose');
 
const registerEvent = mongoose.model('registerEvent', new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Duration:{
        type: String,
        required : true
    },
    Location: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    ContactDetails: {
        type: String,
        required: true
    },
    MaxAdmittance:{
        type: String,
        required : true
    },
    MaxUserLimit: {
        type: String,
        required: true
    },
    TicketIssuance: {
        type: String,
        required: true
    },
    FeeOptions: {
        type: String,
        required: true
    },
    AdmittanceType:{
        type: String,
        required : true
    },
	create_date:{
		type: Date,
		default: Date.now
	}
}));
 
module.exports = registerEvent;