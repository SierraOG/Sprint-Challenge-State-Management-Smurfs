import React, {useState} from 'react'

import { connect } from 'react-redux';

import {addSmurf} from '../actions'

const SmurfForm = (props) => {
    const [item, setItem] = useState({name: '', age: '', height: ''})
  
    const handleChanges = event =>{
        setItem({...item, [event.target.name]:event.target.value})
    }
    
    const submitItem = event =>{
        event.preventDefault();
        // call action
        props.addSmurf(item)
        console.log(item)
        setItem({name: '', age: '', height: ''})
    }
    return (
        <form onSubmit={submitItem}>
            <input
                type="text"
                value={`${item.name}`}
                name="name"
                onChange={handleChanges}
                placeholder="Name"
            />
            <input
                type="text"
                value={`${item.age}`}
                name="age"
                onChange={handleChanges}
                placeholder="Age"
            />
            <input
                type="text"
                value={`${item.height}`}
                name="height"
                onChange={handleChanges}
                placeholder="Height"
            />
            <button>Add</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
    };
  };
  export default connect(
    mapStateToProps,
    { addSmurf }
  )(SmurfForm);