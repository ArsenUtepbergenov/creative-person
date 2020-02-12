import React from 'react';
import { NavLink } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="cp-nav">
                <ul className="cp-nav-menu">
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/'>
                            <div className="cp-nav-logo">
                                <img src={ './public/img/logo.png' } alt="logo" className="cp-logo-img" width="70px" height="60px"></img>
                            </div>
                        </NavLink>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/' className="cp-nav-link" activeClassName="cp-nav-link-active" exact><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/gallery' className="cp-nav-link" activeClassName="cp-nav-link-active" exact><i className="fa fa-picture-o" aria-hidden="true"></i> Gallery</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavigationBar;
