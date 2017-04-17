import React from 'react';

export default function Picture({ picture }) {
    return (
        <div className="cp-picture-item">
            <img src={ require('../../img/picture.jpg') } alt="picture" className="cp-picture" width="100%"></img>
            <h3 className="cp-picture-title">{ picture.title }</h3>
            <p className="cp-picture-author">{ picture.author }</p>
        </div>
    );
}

Picture.propTypes = {
    picture: React.PropTypes.object.isRequired
}
