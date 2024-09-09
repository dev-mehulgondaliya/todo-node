const mongoose = require("mongoose");
const Todo = require("../model/todoModel")

const addTodo = async(data) => {
    try {
        const result = await Todo.create(data)
        return result;
    } catch (error) {
        console.log('error in add todo', error)
    }
}
const updateTodo = async (data, id) => {
    try {
        const query = {
            _id : id,
            $set : {todoName : data.name}
        }
        const result = await Todo.findOneAndUpdate(query)
        return result
    } catch (error) {
        console.log('error in update todo', error)
    }
}
const listTodo = async () => {
try {
    const result = await Todo.find({})
    return result
} catch (error) {
    console.log('error in get list todo', error)
}
}



const deleteTodo = async (id) => {
try {
const mongoose = require('mongoose')
    const query = {
        _id: ObjectId(id)
    }
    console.log(query)
    const result =  await Todo.deleteOne(query)
    return result;
} catch (error) {
    console.log('error in delte todo', error)
}
}

module.exports = {
    addTodo,
    updateTodo,
    listTodo,
    deleteTodo
}