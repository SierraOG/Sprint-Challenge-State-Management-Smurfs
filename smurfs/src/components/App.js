import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';

import {getSmurf} from '../actions'

import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'
class App extends Component {
  // componentDidMount(){
  //   getSmurf()
  // }

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <p>Add a new smurf to the village!</p>
        <SmurfForm />
        <SmurfList />
        <button onClick={() => this.props.getSmurf()}>view smurf village</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
  };
};
export default connect(
  mapStateToProps,
  { getSmurf }
)(App);