const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const bounty = [
    {
        first_name: "Black",
        last_name: "Widow",
        type: "Jedi",
        living: true,
        price: 5500,
        _id: uuidv4()
    },
    {
        first_name: "Loki",
        last_name: "Odison",
        type: "Sith",
        living: false,
        price: 19500,
        _id: uuidv4()
    },
    {
        first_name: "Doctor",
        last_name: "Strange",
        type: "Jedi",
        living: true,
        price: 4500,
        _id: uuidv4()
    },
    {
        first_name: "Red",
        last_name: "Skull",
        type: "Sith",
        living: false,
        price: 10500,
        _id: uuidv4()
    }
];

// Routes

// get all 
bountyRouter.get("/", (req, res) => {
    res.send(bounty);
})

// get one 
  bountyRouter.get("/:bountyId", (req, res) => {
      const bountyId = req.params.bountyId
      const foundBounty = bounty.find(bounty => bounty._id === bountyId)
      res.send(foundBounty)
})

// post
  bountyRouter.post("/", (req, res) => {
    const newBounty = req.body; 
    newBounty._id = uuidv4();
    bounty.push(newBounty);
    res.send(`Bounty: ${newBounty.firstName} ${newBounty.lastName} has been successfully added to the database`);
});

// put
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounty[bountyIndex], updateObject) 
    res.send(updatedBounty)
})

// delete
  bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId  
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId) 
    bounty.splice(bountyIndex, 1) 
    res.send(`Bounty: ${newBounty.firstName} ${newBounty.lastName} has been successfully deleted from the database`)
})
  
  module.exports = bountyRouter; // exporting variable to server to handle request