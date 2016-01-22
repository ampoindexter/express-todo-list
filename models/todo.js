'use strict';

var fs = require('fs');

var Todo = {};

var db = 'db/todos.json';

Todo.find = function(cb) {
  fs.readFile(db, function(err, data) {
    if (err) return cb(err);
    var todos = JSON.parse(data);
    cb(null, todos);
  });
};

Todo.create = function(todo, cb) {
  Todo.find(function(err, todos) {
    todos.push(todo);
    var data = JSON.stringify(todos);
    fs.writeFile(db, data, cb);
  });
}

Todo.put = function(remaining, cb) {
  if (remaining.hasData()) {
    var todoList = JSON.stringify(remaining.data);
  } else {
    remaining.data = [];
    var todoList = remaining.data;
  }
  fs.writeFile(db, todoList, cb);
}

module.exports = Todo;