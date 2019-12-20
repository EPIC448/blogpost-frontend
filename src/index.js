import React from 'react';
import ReactDOM from 'react-dom';


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import blogpostReducer from './reducers/blogpostReducer'
import App from './App';

// import { compose, applyMiddleware } from 'redux';

// const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ;

// let store = createStore(blogpostReducer, composeEnhancer(applyMiddleware(thunk)))

// let store = createStore( composeEnhancer(applyMiddleware(thunk)))


const store = createStore(blogpostReducer, composeWithDevTools(applyMiddleware(thunk),
  // other store enhancers if any
));

ReactDOM.render(
    <Provider store={store}>
     <Router>
       <App />
       </Router>
    </Provider>,
    
    document.getElementById('root'));

