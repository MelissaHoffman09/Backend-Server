import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm.js';
import './style.css'

const Bounty = (props) => {
    const { 
        firstName, 
        lastName, 
        bountyAmount, 
        type, 
        living, 
        _id,
        deleteBounty,
        editBounty
    } = props;

    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className= {`bounty ${type === 'Jedi' ? 'jedi-bg' : 'sith-bg'}`}>
            { 
                !editToggle ?
                <>
                    <h3>Name: {firstName} {lastName}</h3>
                    <h4>Alive: {living} </h4>
                    <h4>Price: ${bountyAmount}</h4>
                    <h4>Type: {type}</h4>
                    <button className='deleteB' onClick={() => deleteBounty(_id)}>Remove</button>
                    <button className='editB' onClick={() => setEditToggle(prevEditToggle => !prevEditToggle)}>Edit</button>
                </>
                :
                <>
                    <AddBountyForm
                        toggle={setEditToggle} submit={editBounty} {...props}buttonText="Submit"/> 
                
                    <button className='cancelEditB' onClick={() => setEditToggle(prevEditToggle => !prevEditToggle)}>Cancel</button>
                </>
            }
        </div>
    )
}
export default Bounty