import React from 'react';
import { NavLink } from 'react-router-dom';

class TopBar extends React.Component {
    render() {
        return (
            <div>
                <div className="cp-top-bar">
                    <NavLink to='/'>
                        <div className="cp-top-bar-logo">
                            <img src={ require('../../img/logo.png') } alt="logo" className="cp-logo-img" width="70px" height="60px"></img>
                        </div>
                    </NavLink>
                    <div className="cp-top-bar-menu">
                        <input className="cp-top-bar-input-search" type="search" placeholder="search art..."></input>
                        <button className="cp-top-bar-button-search" type="button"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
                        <NavLink to='/register' className="cp-top-bar-link-register" activeClassName="cp-nav-link-active" exact><i className="fa fa-user-plus" aria-hidden="true"></i> Register</NavLink>
                        <NavLink to='/signin' className="cp-top-bar-link-signin" activeClassName="cp-nav-link-active" exact><i className="fa fa-sign-in" aria-hidden="true"></i> Sign in</NavLink>
                    </div>
                </div>
                <div className="cp-background-cover"></div>
            </div>
        )
    }
}

export default TopBar;
