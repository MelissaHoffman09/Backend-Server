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
        price: 9500,
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

bountyRouter.route("/")
.get((req, res) => {
    res.send(bounties)
})
.post((req, res) => {
    console.log(req.body);
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);
    res.send(`${newBounty.first_name} ${newBounty.last_name} has been added to the database`);
})

module.exports = bountyRouter;