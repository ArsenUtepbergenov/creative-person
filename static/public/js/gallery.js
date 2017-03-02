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

// Компонент "форма добавления картины"
class FormPicture extends React.Component {
    constructor(props) {
        super(props);
        this.title = null;
        this.author = null;
        this.addPicture = this.addPicture.bind(this);
    }

    addPicture() {
        this.title = document.getElementsByName('input-title')[0].value;
        this.author = document.getElementsByName('input-author')[0].value;

        axios.post('/gallery', {
            title: this.title,
            author: this.author
        });
    }

    render() {
        return (
            <form className="cp-form-add-picture">
                <div className="cp-form-add-picture-header">
                </div>
                <div className="cp-form-add-picture-body">
                    <div className="cp-form-body-row">
                        <label className="cp-form-body-label" htmlFor="input-title">Title:</label>
                        <input className="cp-form-body-input" name="input-title" type="text" placeholder="Enter new title.." required />
                    </div>
                    <div className="cp-form-body-row">
                        <label className="cp-form-body-label" htmlFor="input-author">Author:</label>
                        <input className="cp-form-body-input" name="input-author" type="text" placeholder="Enter new author..." required />
                    </div>
                </div>
                <div className="cp-form-add-picture-footer">
                    <button className="cp-form-add-picture-button" type="button" onClick={this.addPicture}>Add picture</button>
                </div>
            </form>
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
                <FormPicture></FormPicture>
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
