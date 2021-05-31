import React, { useState } from 'react'
import AddJob from './AddJob';
import './index.css'

const Job = (props) => {
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

    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className="jobCard">
            { 
                !editToggle ?
                <>
                    <h3>{company}</h3>
                    <h4>{title} </h4>
                    <h4>Applied: {type ? "Yes" : "No"}</h4>
                    <h4>Date Applied: {date}</h4>
                    <h4>Status: {status}</h4>
                    <button className='deleteB' onClick={() => deleteJob(_id)}>Remove</button>
                    <button className='editB' onClick={() => setEditToggle(prevEditToggle => !prevEditToggle)}>Edit</button>
                </>
                :
                <>
                    <AddJob
                        toggle={setEditToggle} submit={editJob} {...props}buttonText="Submit"/> 
                
                    <button className='cancelEditB' onClick={() => setEditToggle(prevEditToggle => !prevEditToggle)}>Cancel</button>
                </>
            }
        </div>
    )
}
export default Job