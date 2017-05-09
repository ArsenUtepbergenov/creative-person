import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import PictureForm from './components/pictureForm';
import PicturesCollection from './components/picturesCollection';
import SortPane from './components/sortPane';

import { getPictures, deletePicture } from './actions/galleryActions';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formAddPictureVisible: false,
            ratings: [1, 2, 3, 4, 5]
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.getPictures();
    }

    onClick() {
        this.setState({ formAddPictureVisible: !this.state.formAddPictureVisible });
    }

    render() {
        return (
            <div className="cp-gallery">
                <SortPane ratings = { this.state.ratings } ></SortPane>
                <PicturesCollection pictures={ this.props.pictures } deletePicture={ this.props.deletePicture } />
                <div>
                    <div className="cp-gallery-add-picture-button" onClick={ this.onClick }>
                        <i className="fa fa-plus fa-5x cp-gallery-add-picture-button-icon" aria-hidden="true"></i>
                    </div>
                    {
                        this.state.formAddPictureVisible
                        ? <div>
                              <PictureForm />
                              <span className="cp-modal-form-close-button" onClick={ this.onClick }>&times;</span>
                          </div>
                        : null
                    }
                </div>
            </div>
        );
    }
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
