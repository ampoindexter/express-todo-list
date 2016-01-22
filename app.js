'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', require('./routes/todos'));

app.get('/', function(req, res) {
  res.render('todos');
});

app.get('/', function(req, res) {
  res.status(404).render('404');
});

app.listen(PORT, function(){
  console.log('Listening on port ', PORT);
});