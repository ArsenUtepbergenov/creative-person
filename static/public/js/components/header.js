import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationBar from './navigation';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="cp-background-cover">
                    <header className="cp-header">
                        <NavLink to='/'>
                            <div className="cp-header-logo">
                                <img src={ require('../../img/logo.png') } alt="logo" className="cp-logo-img" width="70px" height="60px"></img>
                            </div>
                        </NavLink>
                        <div className="cp-header-navigation">
                            <NavigationBar></NavigationBar>
                        </div>
                        <div className="cp-header-menu">
                            <div className="cp-header-menu">
                                <input className="cp-header-input-search" type="search" placeholder="search art..."></input>
                                <button className="cp-header-button-search" type="button"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
                                <NavLink to='/register' className="cp-header-link-register" activeClassName="cp-nav-link-active" exact><i className="fa fa-user-plus" aria-hidden="true"></i> Register</NavLink>
                                <NavLink to='/signin' className="cp-header-link-signin" activeClassName="cp-nav-link-active" exact><i className="fa fa-sign-in" aria-hidden="true"></i> Sign in</NavLink>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

export default Header;
