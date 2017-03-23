import React from 'react';
import { Route } from 'react-router-dom';

import NavigationBar from './navigation.js';
import Gallery from './gallery.js';
import Home from './home.js';
import Photo from './photo.js';
import Music from './music.js';
import Signup from './signup.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar></NavigationBar>
                <Route exact path='/' component={Home} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/photo' component={Photo} />
                <Route path='/music' component={Music} />
                <Route path='/signup' component={Signup} />
            </div>
        )
    }
}

export default App;
