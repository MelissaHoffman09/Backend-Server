import React, { useState } from 'react';
import './style.css';

const AddBountyForm = (props) => {
    const {submit} = props;

    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName ||  "",
        bountyAmount: props.bountyAmount || 0,
        living: props.living || true,
        type: props.type || "None"
    }
    const [inputs, setInputs] = useState(initInputs);

    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        submit(inputs, props._id)
        setInputs(initInputs)
        props.toggle && props.toggle(false)
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                type='text'
                name='firstName'
                value={inputs.firstName}
                onChange={handleChange}
                placeholder='First Name'
            />
            <input
                type='text'
                name='lastName'
                value={inputs.lastName}
                onChange={handleChange}
                placeholder='Last Name'
            />
            <br />
            <input
                type='number'
                name='bountyAmount'
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder='Bounty Price'
            />
            <br /> <br />
            <label>Type:</label> 
            <br />
            Jedi: <input type="checkbox" name="type" onChange={() => setInputs(prevInputs => {
                return {...prevInputs, type: "Jedi"};
            })} value={inputs.type} checked={inputs.type === "Jedi" ? true : false} /> 
            <br />
            Sith: <input type="checkbox" name="type" onChange={() => setInputs(prevInputs => {
                return {...prevInputs, type: "Sith"};
            })} value={inputs.type} checked={inputs.type === "Sith" ? true : false}/> 
            <br /> <br />
            <label>Alive:</label> 
            <br />
            Yes: <input type="checkbox" name="living" onChange={() => setInputs(prevInputs => {
                return {...prevInputs, living: "yes"};
            })} value={inputs.type} checked={inputs.living === "yes" ? true : false}/> 
            <br />
            No: <input type="checkbox" name="living" onChange={() => setInputs(prevInputs => {
                return {...prevInputs, living: "no"};
            })} value={inputs.type} checked={inputs.living === "no" ? true : false} /> 
            <br />  <br />
            <button className='submitB'>{props.buttonText}</button>
        </form>
    );
}

export default AddBountyForm
