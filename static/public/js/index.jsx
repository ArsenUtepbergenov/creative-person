import React from 'react';
import ReactDOM from 'react-dom';
// импорт компонента "галерея"
import Gallery from './gallery.jsx';

// обращение к DOM и отрисовка в root компонента "галерея"
ReactDOM.render(
    <Gallery></Gallery>,
    document.getElementById('root')
);
