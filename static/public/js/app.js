import React from 'react';
import NavigationBar from './navigation.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar></NavigationBar>
                {/* добавили вывод потомков */}
                {this.props.children}
            </div>
        )
    }
}

export default App;
