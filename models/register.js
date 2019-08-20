const mongoose = require('mongoose');

// Register Doctor Schema
const registerDoctorSchema = mongoose.Schema({
	fname:{
		type: String,
		required: true,
		trim: true
	},
	lname:{
		type: String,
		required: true,
		trim: true
	},
	email:{
		type: String,
		required: true,
		trim: true,
		unique: true
	},
    gender:{
		type: String,
		required: true,
		trim: true
	},
	mobile:{
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	address:{
		type: String,
		required: false,
		trim: true
	},
	city:{
		type: String,
		required: false,
		trim: true
	},
	pincode:{
		type: String,
		required: false,
		trim: true
	},
	state:{
		type: String,
		required: false,
		trim: true
	},
	country:{
		type: String,
		required: false,
		trim: true
	},
	specification:{
		type:String,
		required:true,
		trim: true
	},
    registrationnumber:{
		type:String,
		required:true,
		trim: true,
		unique: true
	},
    registrationcouncil:{
		type:String,
		required:true,
		trim: true
	},
    registrationyear:{
		type:String,
		required:true,
		trim: true
	},
    degree:{
		type:String,
		required:true,
		trim: true
	},
    college:{
		type:String,
		required:true,
		trim: true
	},
    completionyear:{
		type:String,
		required:true,
		trim: true
	},
    experience:{
		type:String,
		required:true,
		trim: true
	},
    haveclinic:{
		type:String,
		required:true,
		trim: true
	},
    clinicname:{
		type:String,
		required:true,
		trim: true
	},
    cliniccity:{
		type:String,
		required:true,
		trim: true
	},
    cliniclocality:{
		type:String,
		required:true,
		trim: true
	},
    isactive:{
		type: Boolean,
		required:true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('DoctorRegister', registerDoctorSchema);