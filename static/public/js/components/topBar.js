import React from 'react';
import { NavLink } from 'react-router-dom';

class TopBar extends React.Component {
    render() {
        return (
            <div className="cp-top-bar">
                <div className="cp-top-bar-logo">
                    <img src={ require('../../img/logo.png') } alt="logo" className="cp-logo-img" width="90px" height="80px"></img>
                </div>
                <div className="cp-top-bar-menu">
                    <input className="cp-top-bar-input-search"></input>
                    <button className="cp-top-bar-button-search" type="button"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
                    <NavLink to='/register' className="cp-top-bar-link-register" activeClassName="cp-nav-link-active" exact><i className="fa fa-user-plus" aria-hidden="true"></i> Register</NavLink>
                    <NavLink to='/signin' className="cp-top-bar-link-signin" activeClassName="cp-nav-link-active" exact><i className="fa fa-sign-in" aria-hidden="true"></i> Sign in</NavLink>
                </div>
            </div>
        )
    }
}

export default TopBar;
