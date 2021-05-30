import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Jobs from './components/Jobs'
import JobForm from './components/JobForm'
//import { query } from 'express'

function App() {
    const [jobs, setJobs] = useState([])

    const getJobs = (() => {
        axios.get('/jobs')
            .then(res => setJobs(res.data))
            .catch(err => console.log(err))
    })

    const addJob = ((newJob) => {
        axios.post("/jobs", newJob)
            .then(res => {
                setJobs(prevJobs => [...prevJobs, res.data])
            })
            .catch(err => console.log(err))
    })

    const deleteJob = (jobId) => {
        axios.delete(`jobs/${jobId}`)
            .then(res => {
                setJobs(prevJobs => prevJobs.filter(job => job._id !== jobId))
            })
            .catch(err => console.log(err))
    }


    const editJob = ((updates, jobId) => {
        axios.put(`jobs/${jobId}`, updates)
            .then(res => {
                setJobs(prevJobs => prevJobs.map (job => job._id !== jobId ? job : res.data))
            })
            .catch(err => console.log(err))
    })

    /*const filterJob = (jobs, query) => {
        if (!query) {
        }
    
        return jobs.filter((job) => {
            const jobName = job.type;
            return jobName;
        });
    };

    //const { search } = window.location;
    //const query = new URLSearchParams().get('s');
    //const filteredJob = filterJob(jobs, query); */

    useEffect(() => {
        getJobs();
    }, []);

    return (
        <div className ="containerBox">
              
          
        <div className ="header">
        
            <h1 
                className="title">Job Application Tracker</h1>
        <JobForm 
                submit={addJob}
                btnText="Add Job"
            />
            </div>
            <div>
             {/* Job FORM */}
             
                { 
                jobs.map(jobs => {
                    return<Jobs
                    {...jobs} 
                    key={jobs._id}
                    company={jobs.company}
                    title={jobs.title}
                    type={jobs.type}
                    date={jobs.date}
                    status={jobs.status}
                  
                    deleteJob={deleteJob}
                    editJob={editJob}
                    addJob={addJob}
                    
                    />}) 
                }
            </div>
        </div>
    )
}

export default App;