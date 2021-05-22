const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 7500


// Middleware - A function that fires on the inbetween for every route
app.use(morgan("dev")) // Logs request to the console 
app.use(express.json()); // Looks for a request body, and turns it into "req.body"

//Routes
app.use("/things", require("./routes/thingRouter"))
// telling app to listen to port with callback function showing it is in fact working.

// Error Handling
app.use((err, req, res, next) => {
    // console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});