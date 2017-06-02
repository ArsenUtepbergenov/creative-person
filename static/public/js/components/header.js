import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationBar from './navigation';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="cp-background-cover">
                    <header className="cp-header">
                        <div className="cp-header-navigation">
                            <NavigationBar></NavigationBar>
                        </div>
                        <div className="cp-header-menu">
                            <div className="cp-header-menu-elements">
                                <div className="cp-header-menu-element">
                                    <input className="cp-header-input-search" type="search" placeholder="search art..."></input>
                                    <button className="cp-header-button-search" type="button">
                                        <i className="fa fa-search" aria-hidden="true"></i> <span className="cp-header-button-search-text">Search</span>
                                    </button>
                                </div>
                                <NavLink to='/register' className="cp-header-link-register">
                                    <i className="fa fa-user-plus" aria-hidden="true"></i> <span className="cp-header-link-register-text">Register</span>
                                </NavLink>
                                <NavLink to='/signin' className="cp-header-link-signin">
                                    <i className="fa fa-sign-in" aria-hidden="true"></i> <span className="cp-header-link-signin-text">Sign in</span>
                                </NavLink>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

export default Header;
