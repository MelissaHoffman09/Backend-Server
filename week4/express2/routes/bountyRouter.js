const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const bounties = [
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

// get
bountyRouter.route("/")
.get((req, res) => {
    res.send(bounties)
})

// post
.post((req, res) => {
    console.log(req.body);
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);
    res.send(`Bounty: ${newBounty.first_name} ${newBounty.last_name} has been successfully added to the database`);
})

// put 
bountyRouter.route("/:bountyID")
.put((req, res) => {
    const bountyID = req.params.bountyID;
    const updatedBountyObject = req.body;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyID);
    Object.assign(bounties[bountyIndex], updatedBountyObject);
    res.send(`Bounty: ${newBounty.first_name} ${newBounty.last_name} has been successfully changed in the database`);
})

//delete
.delete((req, res) => {
    const bountyID = req.params.bountyID;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyID);
    bounties.splice(bountyIndex, 1);
    res.send(`Bounty: ${newBounty.first_name} ${newBounty.last_name} has been successfully removed from the database`)
})

module.exports = bountyRouter;