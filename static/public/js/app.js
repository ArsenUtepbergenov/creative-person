import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul className="cp-nav-menu">
                    <li>
                        <Link to='/gallery' className="cp-nav-link">Gallery</Link>
                    </li>
                </ul>
                {/* добавили вывод потомков */}
                {this.props.children}
            </div>
        )
    }
}

export default App;
