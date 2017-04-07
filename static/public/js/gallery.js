// импорт библиотеки react
import React from 'react';
// импорт react-dom для работы с DOM деревом
import ReactDOM from 'react-dom';
// импорт axios для ajax запросов
import axios from 'axios';

import PictureForm from './components/pictureForm';
import { Picture } from './components/pictureForm';

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
                            return <Picture key={el.id} picture={el.picture} title={el.title} author={el.author}></Picture>;
                        })
                    }
                </div>
                <PictureForm></PictureForm>
            </div>
        );
    }
}

// экспорт
export default Gallery;
