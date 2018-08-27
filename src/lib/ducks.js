import uuid from 'uuid/v4';
import superagent from 'superagent';
import cors from 'cors';

//const url = 'http://localhost:3014/api/v1/chores';
//const url = 'https://relationship-modeling14.herokuapp.com/api/v1/chores';
const url = 'https://internets-of-thing-api.herokuapp.com/api/v1/things';
// Actions
export const CHORE_ADD = 'chore/ADD';
export const CHORE_UPDATE = 'chore/UPDATE';
export const CHORE_DELETE = 'chore/DELETE';
export const FETCH_CHORES = 'chore/FETCH';
export const CHORE_ASYNC_ADD = 'chore/ASYNC_ADD';

// Reducer
let initialState = [];
export default function reducer(state = initialState, action) {
  let {type, payload} = action;
  switch (type) {
  case CHORE_ADD:
    return [...state, payload];
  case CHORE_ASYNC_ADD:
    return [...state, ...payload];
  case CHORE_UPDATE: return state.map(chore => chore.id === payload.id ? payload : chore);
  case CHORE_DELETE: return state.filter(chore => chore.id !== payload.id);
  case FETCH_CHORES: return {...payload};
  default: return state;
  }
};

// Action Creators
export const choreCreate = (payload) => {
    console.log('What is the payload', payload);

    return dispatch => {
        superagent.post(url, payload)
        .then(res => {
            console.log('res:', res.body);
            dispatch({type: CHORE_ADD, payload: res.body})
        })
    }

};
export const choreAsyncCreate = (chore) => {
    console.log('inside action creator', chore)
  return {
    type: CHORE_ASYNC_ADD,
    payload: chore,
  };
};

export const choreUpdate = (chore) => ({
    // return dispatch => {
    //     superagent.put(url, payload._id)
    //     .then(res => {
    //         console.log('res:', res.body);
    //         dispatch({type: CHORE_UPDATE, payload: res.body})
    //     })
    // }
  type: CHORE_UPDATE,
  payload: chore,
});

export const choreDelete = (chore) => ({
// return dispatch => {
//     superagent.delete(url, payload)
//     .then(res => {
//         dispatch({type: CHORE_DELETE, payload: res.body})
//     })
// }

  type: CHORE_DELETE,
  payload: chore,
});

export const fetchChores = () => {
    //superagent.get()
  return dispatch => {

    fetch(url)
    .then(function(res) { 
        
      return res.json();
    })
    .then(function(chores) {
        console.log('chores: ', chores)
       dispatch(choreAsyncCreate(chores));
    });

       // dispatch({type: FETCH_CHORES, payload: res.body})})
    //   setTimeout(() => {
    // dispatch({type: FETCH_CHORES, payload: [{chore: 'laundry'}]});
    //   }, 2000);
  };
};