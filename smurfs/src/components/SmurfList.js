import React from 'react'
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';
import Smurf from './Smurf'

const SmurfList = props => {
    return (
        <div className='smurf-list'>
            <h2>Smurf village</h2>
            {props.isLoading ? (
            <Loader type="TailSpin" color="#686868" height="100" width="100" />
            ) : (
            props.smurfs.map(smurf => <Smurf key={smurf.name} smurf={smurf} />)
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
    };
  };
  export default connect(
    mapStateToProps
  )(SmurfList);