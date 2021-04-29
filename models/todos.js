const { Schema, model } = require ('mongoose')

const todoSchema = new Schema({
    title: String,
    steps: [{
        step: String,
        completed: Boolean
    }],
    achieved: Boolean,
    difficulty: String,
    priority: String,
    tags: [String],
    username: String
}, {timestamps: true})

const Todo = model('Todo', todoSchema)

module.exports = Todo