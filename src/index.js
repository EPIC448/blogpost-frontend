import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import blogpostReducer from './reducers/blogpostReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';



// Working with Redux
const store = createStore(blogpostReducer, composeWithDevTools(applyMiddleware(thunk),
  // using the new version of redux
));

ReactDOM.render(
    <Provider store={store}>
     <Router>
       <App />
       </Router>
    </Provider>,
    
    document.getElementById('root'));

