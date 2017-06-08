import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div className="cp-header-menu-elements">

                <div className="cp-form-input-search-wrapper">
                    <div className="cp-form-input-search-icon-wrapper">
                        <i className="fa fa-search cp-form-input-icon" aria-hidden="true"></i>
                    </div>
                    <input type="text"
                           className="cp-form-input-search"
                           placeholder="Search art..."
                    />
                </div>

                <NavLink to='/register' className="cp-header-link-register">
                    <i className="fa fa-user-plus" aria-hidden="true"></i> <span className="cp-header-link-register-text">Register</span>
                </NavLink>

                <NavLink to='/signin' className="cp-header-link-signin">
                    <i className="fa fa-sign-in" aria-hidden="true"></i> <span className="cp-header-link-signin-text">Sign in</span>
                </NavLink>

            </div>
        )
    }
}

export default Menu;
