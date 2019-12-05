import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
toast.configure();
const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
