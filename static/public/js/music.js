import React from 'react';
import { connect } from 'react-redux';

import MusicList from './components/musicList';
import { getMusic } from './actions/musicActions';

import testMusic from '../mp3/folk.mp3';

class Music extends React.Component {
    componentDidMount() {
        this.props.getMusic();
    }

    render() {
        return (
            <div>
                <h3>Music page</h3>
                <MusicList music={ this.props.music } />
                <audio controls>
                    <source src= { testMusic } type="audio/mpeg"></source>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}

Music.propTypes = {
    music: React.PropTypes.array.isRequired,
    getMusic: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        music: state.music
    }
}

export default connect(mapStateToProps, { getMusic })(Music);
