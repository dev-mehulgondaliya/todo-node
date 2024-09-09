const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
    todoName:{type: String}
})

const Todo = mongoose.model('TODO', todoSchema)

module.exports = Todo