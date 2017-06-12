import React from 'react';
import { NavLink } from 'react-router-dom';

class Admin extends React.Component {
    render() {
        return (
            <div>
                <div className="cp-admin-gallery">
                    <p className="cp-admin-gallery-text">Management gallery:</p>
                    <NavLink to="/gallery/new" className="cp-gallery-add-picture-button">
                        <span className="cp-gallery-add-picture-button-text">Add picture</span>
                        <i className="fa fa-plus cp-gallery-add-picture-button-icon" aria-hidden="true"></i>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Admin;
