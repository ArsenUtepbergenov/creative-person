import React from 'react';
import Picture from './picture';

export default function PicturesCollection({ pictures }) {
    const emptyMessage = (
        <p>There are not pictures yet in your collection</p>
    );

    const picturesCollection = (
        pictures.map(picture => {
            return <Picture key={picture.id} picture={picture}></Picture>;
        })
    );

    return (
        <div className="cp-pictures-list">
            { pictures.length === 0 ? emptyMessage : picturesCollection }
        </div>
    );
}

PicturesCollection.propTypes = {
    pictures: React.PropTypes.array.isRequired
}
