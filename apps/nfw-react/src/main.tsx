import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {pizzaReducer} from './pages/redux/reducers/pizza.reducer'
import App from './app/app';

const store = createStore(combineReducers({pizzaReducer}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
