import React from 'react';
import { Route } from 'react-router-dom';

import NavigationBar from './components/navigation';
import TopBar from './components/topBar';
import Footer from './components/footer';
import Gallery from './gallery';
import Home from './home';
import Photo from './photo';
import Music from './music';
import Signup from './signup';

class App extends React.Component {
    render() {
        return (
            <div>
                <TopBar></TopBar>
                <NavigationBar></NavigationBar>
                <Route exact path='/' component={Home} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/photo' component={Photo} />
                <Route path='/music' component={Music} />
                <Route path='/signup' component={Signup} />
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
