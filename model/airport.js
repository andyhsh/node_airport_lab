var mongoose = require('mongoose');
var Terminal = require('./terminal');

//create new schema
var airportSchema = new mongoose.Schema({

	name: String,
	country: String,
	terminals: [Terminal.schema],
	opened: { type: Date, default: Date.now }

});

//set schema and collection name to MongoDB
var Airport = mongoose.model('airport', airportSchema);

//export module
module.exports = Airport;