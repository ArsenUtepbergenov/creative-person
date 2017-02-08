// импорт библиотеки react
import React from 'react';
// импорт react-dom для работы с DOM деревом
import ReactDOM from 'react-dom';
// импорт axios для ajax запросов
import axios from 'axios';

// Компонент "картина"
class Picture extends React.Component {
    // обязательный метод для реализации, возвращает, что необходимо отрисовать
    render() {
        return (
            // вместо class применяется className для совместимости
            <div className="cp-picture-item">
                {/* this.props обращение к полученному свойству */}
                <h3>{this.props.title}</h3>
                <p>{this.props.author}</p>
            </div>
        );
    }
}

// Компонент "галерея"
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        // pictures - массив всех картин, displayedPictures - массив, который будет отображаться на странице (меняется при фильтре)
        this.state = {pictures: [], displayedPictures: []};
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        axios.get('/gallery').then(results => {
            this.setState({
                pictures: results.data,
                displayedPictures: results.data
            });
        });
    }

    search(event) {
        let searchQuery = event.target.value.toLowerCase();
        console.log(this.state.pictures);
        let pictures = this.state.pictures.filter(function(el) {
            let searchValue = el.title.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedPictures: pictures
        });
    }

    render() {
        return (
            <div className="cp-gallery">
                <input type="text" className="cp-search-picture" onChange={this.search}></input>
                <div className="cp-pictures-list">
                    {
                        // проход по массиву "картинки"
                        this.state.displayedPictures.map(function(el) {
                            // key, title, author передача параметров в компонент "картинка"
                            return <Picture key={el.id} title={el.title} author={el.author}></Picture>;
                        })
                    }
                </div>
            </div>
        );
    }
}

// экспорт
export default Gallery;
