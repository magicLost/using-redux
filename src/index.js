import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import feedBackFormReducer from "./store/reducer/feedBackForm";
//import testReducer from './store/reducer/test';
import homepageReducer from './store/reducer/homepage';
import tantamareskiReducer from './store/reducer/tantamareski';

const reducer = combineReducers({
    feedBackForm: feedBackFormReducer,
    //test: testReducer
    homepage: homepageReducer,
    tantamareski: tantamareskiReducer
});

/*const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware] Dispatching", action);
            const result = next(action);
            console.log("[Middleware] next state", store.getState());
            return result;
        }
    }
};*/

//const store = createStore(reducer, applyMiddleware(logger));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
