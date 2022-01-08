// package imports
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

// file imports
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// function logger(obj, next, action)
// logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // middleware code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// }

// a simpler way to write above commented code
const logger = ({ dispatch, getState }) => (next) => (action) => {
  // middleware code
  console.log('ACTION_TYPE = ', action.type);
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store);
// console.log('Before State', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log('After State', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);