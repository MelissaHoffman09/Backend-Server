import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Job from './Job'
import AddJob from './AddJob'
import './index.css'

function App() {
  const [job, setJob] = useState([]);

  const getJob = () => {
    axios.get('/jobs')
    .then(res => {
      setJob(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  const addJob = newJob => {
    axios.post('/jobs', newJob)
      .then(res => setJob(prevJob => [...prevJob, res.data]))
      .catch(err => console.log(err))
  }
  
  const deleteJob = jobId => {
    axios.delete(`/jobs/${jobId}`)
      .then(res => {
        setJob(prevJob => prevJob.filter(job => job._id !== jobId))
      })
      .catch(err => console.log(err))
  }

  const editJob = (updates, jobId) => {
    axios.put(`/jobs/${jobId}`, updates)
      .then(res => {
        setJob(prevJob => prevJob.map(job => job._id !== jobId ? job : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getJob();
  }, []);

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <img className='img1' src='https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80' alt='logo' />
      <h2>Job Submission Form</h2>
      <AddJob
        submit={addJob}
        buttonText={"Post Job"}
      />
      <h2>List of Potential Jobs</h2>
      {job.map(job =>
        <Job {...job}
        deleteJob={deleteJob}
        editJob={editJob}
        key={job._id}
        />)}
    </div>
  );
}

export default App;