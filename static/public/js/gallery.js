import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import PictureForm from './components/pictureForm';
import PicturesCollection from './components/picturesCollection';
import SortPane from './components/sortPane';

import { getPictures, deletePicture } from './actions/galleryActions';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            picturesPerPage: 3
        };
        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    componentDidMount() {
        this.props.getPictures();
    }

    setCurrentPage(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const pictures = this.props.pictures;
        const { currentPage, picturesPerPage } = this.state;

        const indexOfLastPicture = currentPage * picturesPerPage;
        const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;

        const currentPictures = pictures.slice(indexOfFirstPicture, indexOfLastPicture);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(pictures.length / picturesPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li key={ number } id={ number } className={classnames('cp-page-numbers-item', { 'cp-page-numbers-item-active': this.state.currentPage == number }) } onClick={this.setCurrentPage}>
                    { number }
                </li>
            );
        });

        return (
            <div className="cp-gallery">
                <SortPane ratings = { this.props.ratings } ></SortPane>
                <div className="cp-pictures-section">
                    <p className="cp-caption-pictures">
                        Pictures of our users:
                    </p>
                    <PicturesCollection pictures={ currentPictures } deletePicture={ this.props.deletePicture } />
                    <div className="cp-pagination">
                        <ul className="cp-page-numbers">
                            { renderPageNumbers }
                        </ul>
                    </div>
                </div>
                <div>
                    <NavLink to="/gallery/new" className="cp-gallery-add-picture-button">
                        <i className="fa fa-plus fa-5x cp-gallery-add-picture-button-icon" aria-hidden="true"></i>
                    </NavLink>
                </div>
            </div>
        );
    }
}

Gallery.defaultProps = {
    ratings: [1, 2, 3, 4, 5]
}

Gallery.propTypes = {
    pictures: React.PropTypes.array.isRequired,
    getPictures: React.PropTypes.func.isRequired,
    deletePicture: React.PropTypes.func.isRequired
}

function getVisiblePictures(rating, pictures) {
    return pictures.filter(picture => {
        return (
            (rating == 'all' || rating == picture.rating)
        );
    });
}

function mapStateToProps(state) {
    const { sorts, pictures } = state;
    return {
        pictures: getVisiblePictures(sorts.rating, pictures),
    };
}

export default connect(mapStateToProps, { getPictures, deletePicture })(Gallery);
