var mongoose = require('mongoose');

var passengerSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	dob: String
})

var Passenger = mongoose.model('passenger', passengerSchema);
module.exports = Passenger;