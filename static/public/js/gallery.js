import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
            </div>
        );
    }
}

Gallery.defaultProps = {
    ratings: [1, 2, 3, 4, 5]
}

Gallery.propTypes = {
    pictures: PropTypes.array.isRequired,
    getPictures: PropTypes.func.isRequired,
    deletePicture: PropTypes.func.isRequired
}

function getVisiblePictures(rating, sorting, pictures) {
    return pictures
        .filter(picture => {
            return (
                (rating == 'All' || rating == picture.rating)
            );
        })
        .sort((a, b) => {
            if (sorting == 'Asc') {
                return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
            }
            if (sorting == 'Desc') {
                return a.title < b.title ? 1 : a.title > b.title ? -1 : 0;
            }
       });
}

function mapStateToProps(state) {
    const { sorts, pictures } = state;
    return {
        pictures: getVisiblePictures(sorts.rating, sorts.sorting, pictures),
    };
}

export default connect(mapStateToProps, { getPictures, deletePicture })(Gallery);
