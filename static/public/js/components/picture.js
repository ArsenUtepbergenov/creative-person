import React from 'react';

import testPicture from '../../img/picture.jpg';

export default function Picture({ picture, deletePicture }) {
    return (
        <div className="cp-picture-item">
            <img src={ testPicture } alt="picture" className="cp-picture" width="100%"></img>
            <h3 className="cp-picture-title">{ picture.title }</h3>
            <p className="cp-picture-author">{ picture.author }</p>

            <div className="cp-picture-buttons">
                <button className="cp-picture-update-button">Edit</button>
                <div className="cp-vertical-delimiter"></div>
                <button className="cp-picture-delete-button" onClick={() => deletePicture(picture.id)}>Delete</button>
            </div>
        </div>
    );
}

Picture.propTypes = {
    picture: React.PropTypes.object.isRequired,
    deletePicture: React.PropTypes.func.isRequired
}
