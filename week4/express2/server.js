const express = require('express');
const app = express();
const PORT = 6500

// Middleware
app.use(express.json())

// Routes
app.use('/bounties', require('./routes/bountyRouter.js'));

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});