import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';


export const getSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  console.log('getsmurf from actions')
  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>
        {
        console.log(res.data)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
    }
    )
    .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }));
};

export const addSmurf = (newSmurfObj) => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    console.log('new smurf object inside actions',newSmurfObj)
    axios
      .post('http://localhost:3333/smurfs', newSmurfObj)
      .then(res =>
          {
          console.log(res.data)
          dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
      }
      )
      .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }));
}