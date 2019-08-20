const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const register = require('./models/register');
const cors = require('cors')

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const users = require('./routes/users');
const auth = require('./routes/auth');
const config = require('config');



app.use(bodyParser.json());
app.use(cors())

if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}

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
