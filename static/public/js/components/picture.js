import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Picture({ picture, deletePicture }) {
    return (
        <div className="cp-picture-item">

            <NavLink to={`/picture/${picture.id}`} className="cp-link-picture">
                <img src={ require(`../../img/${picture.image}`) } alt="picture" className="cp-picture" width="100%"></img>
                <h3 className="cp-picture-title">{ picture.title }</h3>
            </NavLink>
            <p className="cp-picture-author">{ picture.author }</p>
            <p className="cp-picture-rating">Rating: { picture.rating }</p>

            <div className="cp-picture-buttons">
                <NavLink to={`/gallery/new/${picture.id}`} className="cp-picture-update-button">Edit</NavLink>
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
