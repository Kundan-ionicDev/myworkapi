const mongoose = require('mongoose');
// Register Events Schema
const rgetEventsSchema = mongoose.Schema({
	about:{
		type: String,
		required: true,
		trim: true
	},
	actor:{
		type: String,
		required: true,
		trim: true
	},
	aggregateRating:{
		type: String,
		required: true,
		trim: true,
		unique: true
	},
    attendee:{
		type: String,
		required: true,
		trim: true
	},
	composer:{
		type: String,
		required: true,
		trim: true,
		unique: true
    },
    director:{
		type: String,
		required: true,
		trim: true,
		unique: true
	},
    doorTime:{
		type: String,
		required: true,
		trim: true
	},
	duration:{
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
	endDate:{
		type:String,
		required:true,
		trim: true
	},
    eventStatus:{
		type:String,
		required:true,
		trim: true,
		unique: true
	},
    funder:{
		type:String,
		required:true,
		trim: true
	},
    inLanguage:{
		type:String,
		required:true,
		trim: true
	},
    isAccessibleForFree:{
		type:String,
		required:true,
		trim: true
	},
    maximumAttendeeCapacity:{
		type:String,
		required:true,
		trim: true
	},
    offers:{
		type:String,
		required:true,
		trim: true
	},
    organizer:{
		type:String,
		required:true,
		trim: true
	},
    categories:{
		type:String,
		required:true,
		trim: true
	},
    tags:{
		type:String,
		required:true,
		trim: true
	},
    performer:{
		type:String,
		required:true,
		trim: true
	},
    sponsor:{
		type:String,
		required:true,
		trim: true
    },
    description:{
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

module.exports = mongoose.model('rgetEventsSchema', rgetEventsSchema);