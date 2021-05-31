import React, { useState } from 'react';
import './index.css';

const AddJob = (props) => {
    const initInputs = {
        company: props.company || "",
        title: props.title ||  "",
        type: props.type || "",
        date: props.date || "",
        status: props.status || ""
    }
    const [inputs, setInputs] = useState(initInputs);

    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const handleSubmit = ((e) => {
        e.preventDefault();
        if (inputs.type === "Yes") {
          inputs.type = true;
        } else {
          inputs.type = false;
        }
        props.submit(inputs, props._id);
        setInputs(initInputs);
      });

    return (
        <form onSubmit={handleSubmit} >
            <input
                type='text'
                name='company'
                value={inputs.company}
                onChange={handleChange}
                placeholder='Company Name'
            />
            <input
                type='text'
                name='title'
                value={inputs.title}
                onChange={handleChange}
                placeholder='Job Title'
            />
            <br /> <br />
            <label>Applied:</label> 
            <br />
            Yes: <input type="checkbox" name="type" onChange={() => setInputs(prevInputs => {
                return {...prevInputs, type: "Yes"};
            })} value={inputs.type} checked={inputs.type === "Yes" ? true : false} /> 
            No: <input type="checkbox" name="type" onChange={() => setInputs(prevInputs => {
                return {...prevInputs, type: "No"};
            })} value={inputs.type} checked={inputs.type === "No" ? true : false}/> 
            <br /> <br />
            <input
                type='number'
                name='date'
                value={inputs.date}
                onChange={handleChange}
                placeholder='Date Applied MMDDYY'
            />
            <input
                type='text'
                name='status'
                value={inputs.status}
                onChange={handleChange}
                placeholder='Status'
            />
            <br />
            <button className='submitB'>{props.buttonText}</button>
        </form>
    );
}

export default AddJob