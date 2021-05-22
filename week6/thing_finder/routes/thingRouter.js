const express = require("express");
const thingRouter = express.Router(); 
const { v4: uuidv4 } = require("uuid"); 

// Database
const things = [
  {
    thing: "Sea Salt Jasmine Tea",
    price: "$6",
    type: "drink",
    _id: uuidv4(),
  },
  {
    thing: "Sea Salt Coffee",
    price: "$7",
    type: "drink",
    _id: uuidv4(),
  },
  {
    thing: "Macaroon",
    price: "$2",
    type: "dessert",
    _id: uuidv4(),
  },
  {
    thing: "Tuna Melt",
    price: "$9",
    type: "food",
    _id: uuidv4(),
  },
  {
    thing: "Chocolate Cake",
    price: "$6",
    type: "dessert",
    _id: uuidv4(),
  },
  {
    thing: "Hummus n Veggies",
    price: "4",
    type: "food",
    _id: uuidv4(),
  },
  {
    thing: "Matcha Latte",
    price: "5",
    type: "drink",
    _id: uuidv4(),
  },
  {
    thing: "Avocado Toast",
    price: "8",
    type: "food",
    _id: uuidv4(),
  },
  {
    thing: "Chocolate Chip Cookie",
    price: "3",
    type: "dessert",
    _id: uuidv4(),
  }
];


//Get all
thingRouter
     .get("/", (req, res) => {
     res.status(200).send(things)
 })
 
 
 // Get by type
     .get("/search/things", (req, res, next) => {
     const type = req.query.type
 
     if(!type){
         const error = new Error("Invalid type")
         return next(error)
     }
     const filterThings = things.filter(thing => thing.type === type)
     res.status(200).send(filterThings)
 });
 
 
 module.exports = thingRouter