import React, { useState } from 'react';
import JobForm from './JobForm';
import './JobForm.css';


function Jobs(props){
    const { 
        company, 
        title, 
        type, 
        date, 
        status, 
        _id,
        deleteJob,
        editJob
     } = props;

    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="list-container">
        { !editToggle ?
        <> 
            <h1>{ company }</h1>
            <h3>Title: { title }</h3>
            <h3>Applied: {type}</h3>
            <h3>Date Applied: { date }</h3>
            <h3>Status: { status }</h3>
            <button
                className="delete-btn"
                onClick={() => deleteJob(_id)}>
                Delete
            </button>
            <button
                className="edit-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit
            </button>
        </>
        :
        <>
            <JobForm
            toggle={setEditToggle} submit={editJob} {...props}buttonText="Submit"
            />
            <button
                className="delete-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
            </button>
        </>
        }
        </div>
    )
}

export default Jobs;