import React from 'react';
import { connect } from 'react-redux';
import Picture from './picture';

import { getPictures } from '../actions/galleryActions';

import testPicture from '../../img/picture.jpg';

class PictureSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.getPictures();
    }

    render() {
        const picture = this.props.pictures.filter(picture => picture.id == this.props.match.params.id);
        return (
            <div className="cp-picture-single">
                <div className="cp-picture-single-content">
                    <div className="cp-image">
                        <img src={ testPicture } alt="picture" className="cp-picture" width="100%"></img>
                    </div>
                    <div className="cp-info">
                        <p>Title: { picture[0].title }</p>
                        <p>Author: { picture[0].author }</p>
                    </div>
                </div>
            </div>
        )
    }
}

PictureSingle.propTypes = {
    pictures: React.PropTypes.array.isRequired,
    getPictures: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        pictures: state.pictures
    }
}

export default connect(mapStateToProps, { getPictures })(PictureSingle);;
