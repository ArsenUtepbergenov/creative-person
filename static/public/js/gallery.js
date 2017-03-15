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
class PictureForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: '',
            inputAuthor: ''
        };
        this.changeDataPicture = this.changeDataPicture.bind(this);
        this.addPicture = this.addPicture.bind(this);
    }

    changeDataPicture(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value}
        );
    }

    addPicture(event) {
        axios.post('/api/gallery', {
            title: this.state.inputTitle,
            author: this.state.inputAuthor
        });
    }

    render() {
        return (
            <form className="cp-form-add-picture" onSubmit={this.addPicture}>
                <div className="cp-form-add-picture-header">
                </div>
                <div className="cp-form-add-picture-body">
                    <div className="cp-form-body-row">
                        <label className="cp-form-body-label" htmlFor="inputTitle">Title:</label>
                        <input className="cp-form-body-input" name="inputTitle" type="text" placeholder="Enter new title.." onChange={this.changeDataPicture} required />
                    </div>
                    <div className="cp-form-body-row">
                        <label className="cp-form-body-label" htmlFor="inputAuthor">Author:</label>
                        <input className="cp-form-body-input" name="inputAuthor" type="text" placeholder="Enter new author..." onChange={this.changeDataPicture} required />
                    </div>
                </div>
                <div className="cp-form-add-picture-footer">
                    <button className="cp-form-add-picture-button" type="submit">Add picture</button>
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
        axios.get('/api/gallery').then(results => {
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
                <PictureForm></PictureForm>
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
