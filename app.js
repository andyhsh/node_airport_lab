
//import modules
var Airport = require('./model/airport');
var Terminal = require('./model/terminal');
var Flight = require('./model/flight');
var Passenger = require('./model/passenger');

//connect with MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airport');

var flight1 = new Flight();
flight1.from = 'CDG France';
flight1.to = 'JFK New-York, USA';
flight1.airline = 'American Airlines';
flight1.passengers = [];

var flight2 = new Flight();
flight2.from = 'Heathrow UK';
flight2.to = 'JFK New-York, USA';
flight2.airline = 'British Airways';
flight2.passengers = [];

var airport1 = new Airport();
airport1.name = 'JFK';
airport1.country = 'USA';
airport1.terminals = [];
airport1.date = 1488532887689;

var terminal1 = new Terminal();
terminal1.capacity = 234324;
terminal1.flights = [flight1, flight2];

airport1.terminals.push(terminal1);


	airport1.save(function(err, currentUser){
		if(err){
			console.log('Error', err);
		}
		console.log(currentUser);
	});

	terminal1.save(function(err, currentUser){
		if(err){
			console.log('Error', err);
		}
		console.log(currentUser);
	});

	flight1.save(function(err, currentUser){
		if(err){
			console.log('Error', err);
		}
		console.log(currentUser);
	});

	flight2.save(function(err, currentUser){
		if(err){
			console.log('Error', err);
		}
		console.log(currentUser);
	});











