import React from 'react';
import ReactDOM from 'react-dom';


import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import blogpostReducer from './reducers/blogPostReducer
import App from './App';
import { compose, applyMiddleware } from 'redux';

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

let store = createStore(blogpostReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
    < Provider store={store} >
     <Router>
       <App />,
       </Router>
    </Provider>,
    
    document.getElementById('root'));

