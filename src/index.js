import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

// ACTION TYPES
const SET_USERNAME = 'SET_USERNAME';
const TYPE_SOMETHING = 'TYPE_SOMETHING';

// ACTION CREATOR
export const setUsernameAC = (username, surname) => ({
  type: SET_USERNAME,
  payload: {
    username,
    surname,
  }
})

export const typeSomethingAC = (text) => ({
  type: TYPE_SOMETHING,
  payload: {
    text
  }
})

const initialState = {
  username: '',
  surname: '',
  text: ''
}

// REDUCER
const mainReducer = (state=initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case SET_USERNAME:
    return {
      ...state,
      username: action.payload.username,
      surname: action.payload.surname,
    }
    case TYPE_SOMETHING:
      return {
        ...state,
        text: action.payload.text,
      }
    default:
      return state;
  }
}

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
