const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()}
});

const Todo = mongoose.model('Todo', schema);
module.exports = Todo;