const express = require('express');
const todoController = require('../controllers/todoController')
const router = express.Router();

//todo routes
router.get('/', todoController.todo_index)
router.post('/', todoController.todo_create_post)
router.get('/:id', todoController.todo_details)
router.delete('/:id', todoController.todo_delete)
router.put('/:id', todoController.todo_update)

module.exports = router;