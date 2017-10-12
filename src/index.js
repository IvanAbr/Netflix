import 'normalize.scss/normalize.scss';
import './styles.scss';
import App from './App.jsx';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore,applyMiddleware } from 'redux';
import { getMovie } from './actions/movies'
import { findMovie } from './actions/movies'
import  reducer  from './reducers/index'
import Search from './components/Search/Search.jsx'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    console.log('subscribe', store.getState())
  })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);


