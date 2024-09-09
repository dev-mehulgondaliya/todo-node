const todoService = require('../service/todoService')

const addTodo = async (req,res)=>{
    const result = await todoService.addTodo(req.body)
    res.json(result)
}

const updateTodo = async (req,res)=>{
    const result = await todoService.updateTodo(req.body, req.param.id)
    res.json(result)
}

const listTodo = async (req,res)=>{
    const result = await todoService.listTodo(req.body)
    res.json({result})
}

const deleteTodo = async (req,res)=>{
    const result = await todoService.deleteTodo(req.param.id)
    res.json(result)
}


module.exports = {
    addTodo,
    updateTodo,
    listTodo,
    deleteTodo
}