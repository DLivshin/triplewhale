import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import {AppProvider} from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css'

//STORE -> holds global state and data
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


//ACTION -> Describes Action you want to do, just a function that returns object


//display it in console
store.subscribe(() => console.log(store.getState()));



ReactDOM.render(
<Provider store={store}>
<AppProvider>
    <App />
</AppProvider>
</Provider>,
  document.getElementById('root')
);


