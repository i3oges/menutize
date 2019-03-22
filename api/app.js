var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var generate_uid = require('./routes/generate_uid');
var location = require('./routes/location');
var hours = require('./routes/hours');
var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);
app.use('/api/v1/generate_uid', generate_uid);
app.use('/api/v1/location', location);
app.use('/api/v1/hours', hours);

module.exports = app;
