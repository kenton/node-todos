var Todo = require('../models/todo.js');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.get('/api/todos/:username', function(req,res) {
    Todo.find({username: req.params.username}, function(err, todos){
      if(err) throw err;
      res.send(todos);
    });
  });

  app.get('/api/todo/:id', function(req,res) {
    Todo.findById({_id: req.params.id}, function(err, todo){
      if(err) throw err;
      res.send(todo);
    });
  });

  app.post('/api/todo', function(req,res){
    if(req.body.id){
      //update
      Todo.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        done: req.body.done,
        hasAttachment: req.body.hasAttachment
      }, function(err, todo){
        if(err) throw err;
        res.send('Successfully updated todo');
      });
    } else {
      //create
      var newTodo = Todo({
        username: 'test',
        todo: req.body.todo,
        done: req.body.done,
        hasAttachment: req.body.hasAttachment
      });

      newTodo.save(function(err, todo){
        if(err) throw err;
        res.send('Successfully created todo');
      });
    }
  });

  app.delete('/api/todo', function(req, res){
    Todo.findByIdAndRemove(req.body.id, function(err){
      if(err) throw err;
      res.send('Successfully deleted todo');
    });
  });
}
