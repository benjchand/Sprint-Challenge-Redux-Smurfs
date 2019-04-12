/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const ERROR = 'ERROR';
export const CREATE_SMURF = 'CREATE_SMURF';
export const CREATING_SMURF = 'CREATING_SMURF';



const ServerURL = 'http://localhost:3333';

export const getSmurfs = () => {
  const smurfsList = axios.get(`${ServerURL}/smurfs`);
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfsList
      .then( response => {
        dispatch ({
          type: GET_SMURFS,
          payload: response.data
        });
      })
      .catch( err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const createSmurf = smurf => {
  const newSmurf = axios.post(`${ServerURL}/smurfs`, smurf);
  return dispatch => {
    dispatch ({ type: CREATING_SMURF});
    newSmurf
      .then(({ data }) => {
        dispatch({
          type: CREATE_SMURF,
          payload: data
        })
      })
      .catch(err => {
        dispatch({
          type:ERROR,
          payload: err
        })
      })
  }
}