import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Gallery from './gallery.jsx';
import Home from './home.jsx';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// обращение к DOM и отрисовка в root компонента "галерея"
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='gallery' component={Gallery} />
        </Route>
    </Router>,
    document.getElementById('root')
);
