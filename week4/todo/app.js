const express = require('express');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');
const app = express();

const PORT = 8500

// Middleware
app.use(express.json());
app.use(morgan('dev'));

app.use("/todo", require("./route/todo.js"));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});