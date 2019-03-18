var Todo = require('../models/todo.js');

module.exports = function(app){
  app.get('/api/setupTodos', function(req, res){
    //seed database

    var seedTodos = [
      {
        username: "kenton",
        todo: "buy milk",
        done: false,
        hasAttachment: false
      },
      {
        username: "adam",
        todo: "buy eggs",
        done: false,
        hasAttachment: false
      },
      {
        username: "bob",
        todo: "buy cheese",
        done: false,
        hasAttachment: false
      },
      {
        username: "chuck",
        todo: "buy butter",
        done: false,
        hasAttachment: false
      },
    ];

    Todo.create(seedTodos, function(err, results){
      res.send(results);
    });
  });
}
