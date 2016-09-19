var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./user-model');

var app = express();

var jsonParser = bodyParser.json();

app.post('/users', jsonParser, function(req, res){
	if(!req.body) {
		return res.status(400).json({
			message: "No request body"
		});
	}

	if(!('username' in req.body)) {
		return res.status(422).json({
			message: 'Missing field: username'
		});
	}

	var username = req.body.username;

	
})