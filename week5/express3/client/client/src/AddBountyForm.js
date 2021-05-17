import React, { useState } from 'react'

function AddBountyForm(props) {
    const initInputs = {
        firstName: props.firstName || '',
        lastName: props.lastName ||  '',
        living: props.living || false,
        terminated: props.terminated || false,
        bountyAmount: props.bountyAmount ||  '',
        type: props.type || ''
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form className='inputForm' onSubmit={handleSubmit} >
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
            <br />
            <input
                type='text'
                name='type'
                value={inputs.type}
                onChange={handleChange}
                placeholder='Jedi or Sith'
            />
            <br />
            <span>Living</span>
            <input
                type='checkbox'
                name='living'
                checked= {inputs.living}
                onChange={handleChange}
            />
            <br />
            <span>Terminated</span>
            <input
                type='checkbox'
                name='terminated'
                checked= {inputs.terminated}
                onChange={handleChange}
            />
            <br />     
            <button className='submitB'>{props.buttonText}</button>
        </form>
    )
}

export default AddBountyForm
