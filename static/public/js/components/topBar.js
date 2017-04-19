import React from 'react';
import { NavLink } from 'react-router-dom';

class TopBar extends React.Component {
    render() {
        return (
            <div className="cp-top-bar">
                <img src={ require('../../img/logo.png') } alt="logo" className="cp-logo-img" width="120px" height="90px"></img>
                <div className="cp-top-bar-menu">
                    <input className="cp-top-bar-input-search"></input>
                    <button className="cp-top-bar-button-search" type="button"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
                    <NavLink to='/signup' className="cp-top-bar-link-signup" activeClassName="cp-nav-link-active" exact><i className="fa fa-sign-in" aria-hidden="true"></i> Sign up</NavLink>
                </div>
            </div>
        )
    }
}

export default TopBar;
