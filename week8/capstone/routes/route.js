const express = require("express");
const route = express.Router();
const { v4: uuidv4 } = require('uuid');

const jobs = [
  {
    company: "WeedMaps",
    title: "Support Engineer",
    type: true,
    date: 42021,
    status: "waiting",
    _id: uuidv4(),
  },
  {
    company: "Honey",
    title: "Full Stack Developer",
    type: false,
    date: 52821,
    status: "will apply",
    _id: uuidv4(),
  },
  {
    company: "ZenDesk",    
    title: "Developer Support and Enablement Engineer",
    type: true,
    date: 51521,
    status: "interview scheduled",
    _id: uuidv4(),
  },
  {
    company: "ChowNow",
    title: "Backend Developer",
    type: false,
    date: 41221,
    status: "will apply",
    _id: uuidv4(),
  },
  {
    company: "Play Station",
    title: "Software Development Engineer in Test",
    type: true,
    date: 32821,
    status: "2nd interview scheduled",
    _id: uuidv4(),
  },
];

route

// Get all
  .get('/', (req, res, next) => {
    res.status(200).send(jobs);
  }) 

// Get one  
  .get('/:jobId', (req, res, next) => {
    const jobId = req.params.jobId;
    const findJob = jobs.find((job) => job._id === jobId);
    if (!findJob) {
      const error = new Error("Not found");
      res.status(500)
      return next(error);
    }
    res.status(200).send(findJob);
  }) 

  // Get ID
  .get('search/_id', (req, res, next) => {
    const jobId = req.query._id;
    const filteredJob = jobs.filter((job) => job._id === jobId);
    if (!filteredJob) {
      const error = new Error("Not found");
      res.status(500)
      return next(error);
    }
    res.status(200).send(filteredJob);
  })

  // Get type 
  .get('/search/type', (req, res, next) => {
    const type = req.query.type;
    console.log(type);

    if (!type) {
      const error = new Error("Valid type not found");
      res.status(500)
      return next(error);
    }
    const filteredJob = jobs.filter(job => job.type === type);
    res.status(200).send(filteredJob);
  }) 

// Post one
  .post('/', (req, res, next) => {
    const newJob = req.body;
    newJob._id = uuidv4();
    jobs.push(newJob);

    res.status(201).send(newJob);
  }) 

// Edit one
.put('/:jobId', (req, res, next) => {
  const jobId = req.params.jobId;
  const jobIndex = jobs.findIndex((job) => job._id === jobId);
  Object.assign(jobs[jobIndex], req.body);
  res.status(201).send("Job Status has been updated");
})

// Delete one
  .delete('/:jobId', (req, res, next) => {
    const jobId = req.params.jobId;
    const jobIndex = jobs.findIndex((job) => job._id === jobId);
    jobs.splice(jobIndex, 1);

    res.send("Job has been deleted");
  });

module.exports = route;