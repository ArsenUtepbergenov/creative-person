import React from 'react';
import { NavLink } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav>
                <ul className="cp-nav-menu">
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/' className="cp-nav-link" activeClassName="cp-nav-link-active" exact>Home</NavLink>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/gallery' className="cp-nav-link" activeClassName="cp-nav-link-active" exact>Gallery</NavLink>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/photo' className="cp-nav-link" activeClassName="cp-nav-link-active" exact>Photo</NavLink>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <NavLink to='/music' className="cp-nav-link" activeClassName="cp-nav-link-active" exact>Music</NavLink>
                    </li>
                    <li className="cp-nav-link-wrapper cp-nav-link-signup">
                        <NavLink to='/signup' className="cp-nav-link" activeClassName="cp-nav-link-active" exact>Sign up</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavigationBar;
