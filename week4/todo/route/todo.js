const express = require('express');
const todo = express.Router();
const { v4: uuidv4 } = require('uuid');


// Database
const todoList = [
    {
        name: "Workout",
        description: "30 min HIT run followed with 30 min weight lifting",
        imageURL: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        completed: true,
        _id: uuidv4()
    }
];

// Get All
todo.route("/") 
    .get((req, res) => {
    res.send(todoList);
})

//Get One
todo.get("/:todoID", (req, res) => {
    const todoID = req.params.todoID;
    const foundTodoItem = todoList.find(todo => todo._id === todoID);
    res.send(foundTodoItem);
})

//Post
todo.post("/", (req, res) => {
    const newTodoItem = req.body;
    newTodoItem._id = uuidv4();
    todoList.push(newTodoItem);
    res.send(`A new todo item has been successfully added to the database`);
})


// PUT
todo.put("/:todoID", (req, res) => {
    const todoID = req.params.todoID;
    const updatedTodoObject = req.body;
    const todoItemIndex = todoList.findIndex(todo => todo._id === todoID);
    Object.assign(todoList[todoItemIndex], updatedTodoObject);
    res.send('Todo list has been successfully updated');
})

// Delete
todo.delete("/:todoID", (req, res) => {
    const todoID = req.params.todoID;
    const todoItemIndex = todoList.findIndex(todo => todo._id === todoID);
    todoList.splice(todoItemIndex, 1);
    res.send('A todo item has been removed from the database');
})

module.exports = todo