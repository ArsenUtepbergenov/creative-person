import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import PictureForm from './components/pictureForm';
import PicturesCollection from './components/picturesCollection';

import { getPictures } from './actions/galleryActions';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPictures();
    }

    render() {
        return (
            <div className="cp-gallery">
                <PicturesCollection pictures={ this.props.pictures } />
                <PictureForm></PictureForm>
            </div>
        );
    }
}

Gallery.propTypes = {
    pictures: React.PropTypes.array.isRequired,
    getPictures: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        pictures: state.pictures
    }
}

export default connect(mapStateToProps, { getPictures })(Gallery);
