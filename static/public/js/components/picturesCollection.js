import React from 'react';
import PropTypes from 'prop-types';
import Picture from './picture';

export default function PicturesCollection({ pictures, deletePicture }) {
    const emptyMessage = (
        <p>There are not pictures yet in your collection</p>
    );

    const picturesCollection = (
        pictures.map(picture => {
            return <Picture key={picture.id} picture={picture} deletePicture={deletePicture}></Picture>;
        })
    );

    return (
        <div className="cp-pictures-list">
            { pictures.length === 0 ? emptyMessage : picturesCollection }
        </div>
    );
}

PicturesCollection.propTypes = {
    pictures: PropTypes.array.isRequired,
    deletePicture: PropTypes.func.isRequired
}
