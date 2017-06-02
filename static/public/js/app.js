import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import PictureForm from './components/pictureForm';
import PictureSingle from './components/pictureSingle';
import FlashMessagesList from './components/flashMessagesList';
import Gallery from './gallery';
import Home from './home';
import Photo from './photo';
import Music from './music';
import Register from './register';
import Signin from './signin';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <FlashMessagesList />
                <Route exact path='/' component={Home} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/gallery/new' component={PictureForm} />
                <Route path='/gallery/new/:id' component={PictureForm} />
                <Route path='/picture/:id' component={PictureSingle} />
                <Route path='/photo' component={Photo} />
                <Route path='/music' component={Music} />
                <Route path='/register' component={Register} />
                <Route path='/signin' component={Signin} />
                <Footer />
            </div>
        )
    }
}

export default App;
