const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const register = require('./models/register');
const registerevent = require('./models/regevents');
const registerforevent = require('./models/resigterforevent');
const cors = require('cors')

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const users = require('./routes/users');
const auth = require('./routes/auth');
// const config = require('config');

app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://localhost/Testdb')
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Something went wrong...Cannot connect to MongoDB', err));


app.use('/api/users', users);
app.use('/api/auth', auth);

// Register
app.get('/api/GetDoctors', (req, res) => {
	register.find().then(response => {
		res.json({status: 200, data: response});
	}).catch(error => {
		res.json(error);
	})
});

app.post('/api/registerEvent',(req,res) =>{
	var data = req.body;
	registerevent.create(data,(err,response)=>{
		if(err){
			res.json(error);
		}
		res.json(response);
	})
});

app.post('/api/registerforevent', async (req,res) =>{
	var data = req.body;
	// let user ="":
	// user = await registerforevent.findOne({ $or: [{ EmailId: req.body.EmailId }, { MobileNumber: req.body.MobileNumber }] });
	// if(user){
	// 	// console.log(user.toObject());
	// 	return res.status(400).json({
	// 		'Message':'User Already exists',
	// 		'StatusCode':400
	// 	})
	// }
	registerforevent.create(data,(err,response)=>{
		if(err){
			
			res.json(err);
		}
		res.status(200).json({
			'Message':'Ticket booked for event',
			'StatusCode':200,
			'Data':response
		});
	});
});

app.get('/api/GetEvents',(req,res)=>{
	registerevent.findById().then(response =>{
		res.json({
			status:200, data: response
		})
	}).catch(error =>{
		res.json(response);
	});
})

app.post('/api/userRegistration',(req,res) =>{
	var data = req.body;
	user.create(data,(err,response) =>{
		if(err){
			res.json(err);
		}
		res.json(response);
	})
});

app.post('/api/registerdoctor', (req, res) => {
	var data = req.body;
	register.create(data, (err, response) => {
		if(err){
			throw err;
		}
		res.json(response);
	});
});


app.listen(3000);
console.log('Running on port 3000...');
