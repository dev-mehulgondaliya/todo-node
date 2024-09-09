const express = require('express');
const router =  express.Router();
const todoController  = require('../controller/todoController')

router.post('/todo/add', todoController.addTodo)
router.put('/todo/update/:id', todoController.updateTodo)
router.get('/todo/list', todoController.listTodo)
router.delete('/todo/delete/:id', todoController.deleteTodo)

module.exports = router