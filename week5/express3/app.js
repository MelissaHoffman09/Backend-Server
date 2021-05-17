const express = require('express');
const morgan = require("morgan");
const app = express();
const PORT = 5500

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/bounty', require('./routes/bountyRouter.js'));

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});