import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAIL,
    ADD_SMURF_SUCCESS,
} from '../actions';
  

const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
        return {
          ...state,
          isLoading: true,
          error: ''
    };
    case FETCH_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isLoading: false,
          error: ''
    };
    case FETCH_SMURF_FAIL:
        return {
          ...state,
          error: action.payload
    };
    case ADD_SMURF_SUCCESS:
        return {
            ...state
        }
    default:
      return state;
  }
};