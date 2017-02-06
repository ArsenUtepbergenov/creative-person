// импорт библиотеки react
import React from 'react';
// импорт react-dom для работы с DOM деревом
import ReactDOM from 'react-dom';

// тестовые данные
let PICTURES = [
    {
        id: 1,
        title: 'Mormons',
        author: 'Vladislav Mikin'
    },
    {
        id: 2,
        title: 'Reaper',
        author: 'Andrew Zabolotny'
    }
];

// Компонент "картина"
class Picture extends React.Component {
    // обязательный метод для реализации, возвращает, что необходимо отрисовать
    render() {
        return (
            // вместо class применяется className для совместимости
            <li className="cp-picture-item">
                {/* this.props обращение к полученному свойству */}
                <div>{this.props.title}</div>
                <div>{this.props.author}</div>
            </li>
        );
    }
}

// Компонент "галерея"
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {displayedPictures: PICTURES};
        this._search = this._search.bind(this);
    }

    _search(event) {
        let searchQuery = event.target.value.toLowerCase();
        let displayedPictures = PICTURES.filter(function(el) {
            let searchValue = el.title.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedPictures: displayedPictures
        });
    }

    render() {
        return (
            <div className="cp-gallery">
                <input type="text" className="cp-search-picture" onChange={this._search}></input>
                <ul className="cp-pictures-list">
                    {
                        // проход по массиву "картинки"
                        this.state.displayedPictures.map(function(el) {
                            // key, title, author передача параметров в компонент "картинка"
                            return <Picture key={el.id} title={el.title} author={el.author}></Picture>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

// экспорт
export default Gallery;
