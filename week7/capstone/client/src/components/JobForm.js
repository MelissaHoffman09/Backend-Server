import React, { useState } from 'react'
import './JobForm.css'

function JobForm(props) {
    const initInputs = {
      company: props.company || "",
      title: props.title || "",
      type: props.type || "",
      date: props.date || "",
      status: props.status || "",
    };
  
    const [inputs, setInputs] = useState(initInputs);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      if (inputs.type.toLowerCase() === "Yes") {
        inputs.type = true;
      } else {
        inputs.type = false;
      }
      props.submit(inputs, props._id);
      setInputs(initInputs);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <h2>Add Job</h2>
        <input
            type="text"
            name="company"
            value={inputs.company}
            onChange={handleChange}
            placeholder="Company Name"
        />
        <br/>
        <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            placeholder="Job Title"
        />
        <br /><br />
        <label>Applied:  </label> 
            <input type="checkbox" name="type" onChange={() => setInputs(prevInputs => {
                return {...prevInputs, type: "Yes"};
            })} value={inputs.type} checked={inputs.type === "Yes" ? true : false} /> Yes
            <input type="checkbox" name="type" onChange={() => setInputs(prevInputs => {
                return {...prevInputs, type: "No"};
            })} value={inputs.type} checked={inputs.type === "No" ? true : false}/> No
            <br /><br />
          <input
            type="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
            placeholder="Date Applied: MMDDYY "
          />
          <br />
          <input
            type="text"
            name="status"
            value={inputs.status}
            onChange={handleChange}
            placeholder="Status of Application"
          />
          <br/>
          <button className="add-btn">{props.btnText}</button>
        </form>
      </div>
    );
  }

export default JobForm;