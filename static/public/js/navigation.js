import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav>
                <ul className="cp-nav-menu">
                    <li className="cp-nav-link-wrapper">
                        <Link to='/' className="cp-nav-link">Home</Link>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <Link to='/gallery' className="cp-nav-link">Gallery</Link>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <Link to='/photo' className="cp-nav-link">Photo</Link>
                    </li>
                    <li className="cp-nav-link-wrapper">
                        <Link to='/music' className="cp-nav-link">Music</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavigationBar;
