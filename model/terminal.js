var mongoose = require('mongoose');
var Flight = require('./flight');

var terminalSchema = new mongoose.Schema({
	name: String,
	flights: [{type: mongoose.Schema.ObjectId, ref: 'Flight'}],
	capacity: Number
});

//set schema and collection name to MongoDB
var Terminal = mongoose.model('terminal', terminalSchema);

//export module
module.exports = Terminal;