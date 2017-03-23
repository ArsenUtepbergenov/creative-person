import React from 'react';
import { connect } from 'react-redux';

import MusicList from './musicList.js';
import { getMusic } from './actions/musicActions';

class Music extends React.Component {
    componentDidMount() {
        this.props.getMusic();
    }

    render() {
        return (
            <div>
                <h3>Music page</h3>
                <MusicList music={ this.props.music } />
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
