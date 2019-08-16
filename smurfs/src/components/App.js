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
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <button onClick={() => this.props.getSmurf()}>load smurfs</button>
        <p>add a new smurf</p>
        <SmurfForm />
        <h2>Smurf Village</h2>
        <SmurfList />
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