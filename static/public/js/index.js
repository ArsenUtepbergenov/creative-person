import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Gallery from './gallery.js';
import Home from './home.js';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// обращение к DOM и отрисовка в root компонента "Router"
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='gallery' component={Gallery} />
        </Route>
    </Router>,
    document.getElementById('root')
);