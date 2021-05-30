const express = require('express');
const app = express();
const morgan = require('morgan')

const PORT = 7000;


//middleware
app.use(express.json());
app.use(morgan('dev'))


//routes
app.use("/jobs", require("./routes/route"));

//error handling
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
})

//server startup logic
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});