const Todo = require('../models/todos')

//todo_index, todo_details, todo_create_post, todo_delete, todo_update

const todo_index = (req, res) => {
    Todo.find().sort({ createdAt: -1 })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}

const todo_details = (req, res) => {
    Todo.findById(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err)) 
}

const todo_create_post = (req, res) => {
    const todo = new Todo(req.body);

    todo.save()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}

const todo_delete = (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}

const todo_update = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}
module.exports = {
    todo_index,
    todo_details,
    todo_create_post,
    todo_delete,
    todo_update
}