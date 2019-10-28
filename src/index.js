import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Router from './Router';
import './main.css';
import Rootreducer from './reducers/index';


const middleware = [thunk];
const store = createStore(
  Rootreducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
