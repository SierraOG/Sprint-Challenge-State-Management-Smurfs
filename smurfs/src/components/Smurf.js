import React from 'react'


const Smurf= props => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', width: '70%', margin: 'auto'}}>
            <p>{props.smurf.name}</p>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )
}

export default Smurf;