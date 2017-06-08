import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationBar from './navigation';
import Menu from './menu';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="cp-background-cover">
                    <header className="cp-header">
                        <div className="cp-header-navigation">
                            <NavigationBar />
                        </div>
                        <div className="cp-header-menu">
                            <Menu />        
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

export default Header;
