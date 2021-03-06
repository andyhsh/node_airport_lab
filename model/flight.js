var mongoose = require('mongoose');
var Passenger = require('./passenger');

var flightSchema = new mongoose.Schema({
	from: String,
	to: String,
	airline: String,
	passengers: [{type: mongoose.Schema.ObjectId, ref: 'Passenger'}]
});

var Flight = mongoose.model('flight', flightSchema);
module.exports = Flight;