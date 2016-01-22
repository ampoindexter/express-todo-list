'use strict';

var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

router.get('/', function(req, res) {
  Todo.find(function(err, todos) {
    if(err) return res.status(400).send(err);
    res.render('index', {title: 'My Todo List!', items: todos || [{}] });
  });
});

router.get('/all', function(req, res) {
  Todo.find(function(err, todos) {
    if(err) return res.status(400).send(err);
    res.send(todos);
  });
});

router.post('/', function(req, res) {
  var todo = req.body;
  Todo.create(todo, function(err) {
    res.status(err ? 400 : 200).send(err || 'todo created');
  });
});

router.post('/delete', function(req, res) {
  Todo.put(req.body, function(err) {
    res.status(err ? 400 : 200).send(err || 'todo deleted');
  });
});

module.exports = router;