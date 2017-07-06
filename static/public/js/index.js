import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { setAuthorizationToken } from './utilities/utilities';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/signinActions';

import rootReducer from './reducers/rootReducer';
import App from './app.js';

// все стили
import '../scss/index.scss';

import { BrowserRouter } from 'react-router-dom';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

if (window.localStorage.jwtToken) {
    setAuthorizationToken(window.localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(window.localStorage.jwtToken)));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
