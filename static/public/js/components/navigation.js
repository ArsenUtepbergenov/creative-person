import React from 'react';
import { NavLink } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav>
                <ul className="cp-nav-menu">
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/' className="cp-nav-link" activeClassName="cp-nav-link-active" exact><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/gallery' className="cp-nav-link" activeClassName="cp-nav-link-active" exact><i className="fa fa-picture-o" aria-hidden="true"></i> Gallery</NavLink>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/photo' className="cp-nav-link" activeClassName="cp-nav-link-active" exact><i className="fa fa-camera" aria-hidden="true"></i> Photo</NavLink>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/music' className="cp-nav-link" activeClassName="cp-nav-link-active" exact><i className="fa fa-music" aria-hidden="true"></i> Music</NavLink>
                    </li>                
                </ul>
            </nav>
        )
    }
}

export default NavigationBar;
