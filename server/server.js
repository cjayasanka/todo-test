var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Chathura Jayasanka'
});

// newTodo.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log(e);
// });

var neww = new Todo({
    text: 'Wash hands',
    completed: true,
    completedAt: 1245
});

neww.save().then((doc) => {
    console.log(doc);
}, (e) => {
    console.log(e);
});