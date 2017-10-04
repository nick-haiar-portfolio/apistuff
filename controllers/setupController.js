var Todos = require('../models/todoModel');

module.exports = function(app) {

   app.get('/api/setupTodos', function(req, res) {
     
      //JSONGenerator.com
      var starterTodos = [
         {
            username: 'test1',
            todo: 'Buy Milk',
            isDone: false,
            hasAttachment: false
         },
         {
            username: 'test2',
            todo: 'Feed Cat',
            isDone: false,
            hasAttachment: false
         },
         {
            username: 'test3',
            todo: 'Learn NodeJS',
            isDone: false,
            hasAttachment: false
         }
      ];
      
      Todos.create(starterTodos, function(err, results){
         res.send(results);
      });
   });
}