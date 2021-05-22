const express = require("express");
const app = express();
const morgan = require("morgan");

//PORT
const PORT = 7500

// Middleware
app.use(morgan("dev")) 
app.use(express.json()); 

//Routes
app.use("/things", require("./routes/thingRouter"))

// Error Handling
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

//Listening
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});