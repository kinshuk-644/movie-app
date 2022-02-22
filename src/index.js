// package imports
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

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
  // console.log('ACTION_TYPE = ', action.type);
  next(action);
};

// what the inbuilt package actually looks like 
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   // middleware code
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log(store);
// console.log('Before State', store.getState());

// export const StoreContext = createContext();
// console.log('StoreContext', StoreContext);

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log('After State', store.getState());

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//     < StoreContext.Provider value = { store } >
//       {this.props.children}
//     </StoreContext.Provider >
//     );
// }
// }

// export function connect (callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {

//       constructor(props){
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {this.forceUpdate();});
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }

//       render() {
//         const {store} = this.props;

//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBePassedAsProps} />;
          
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store}/>;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }

//     return ConnectedComponentWrapper;
//   };
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />{/* <App store={store} /> */}
      {/* <h1>iv aief </h1> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);