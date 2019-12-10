const Joi = require('joi');
const mongoose = require('mongoose');
 
const registerforEvent = mongoose.model('registerforevent', new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    MobileNumber: {
        type: String,
        required: true
    },
    EmailId: {
        type: String,
        required: true
    },
    Address:{
        type: String,
        required : true
    },
    Quantity: {
        type: String,
        required: true
    },
	create_date:{
		type: Date,
		default: Date.now
	}
}));
 
module.exports = registerforEvent;