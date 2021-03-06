import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPictures } from '../actions/galleryActions';

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
                        <img src={ `./public/img/${picture[0].image}` } alt="picture" className="cp-picture" width="100%"></img>
                    </div>
                    <div className="cp-info">
                        <p>Title: { picture[0].title }</p>
                        <p>Author: { picture[0].author }</p>
                        <p>Rating: { picture[0].rating }</p>
                    </div>
                </div>
            </div>
        )
    }
}

PictureSingle.propTypes = {
    pictures: PropTypes.array.isRequired,
    getPictures: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        pictures: state.pictures
    }
}

export default connect(mapStateToProps, { getPictures })(PictureSingle);;
