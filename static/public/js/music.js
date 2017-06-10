import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import MusicList from './components/musicList';
import { getMusic } from './actions/musicActions';

class Music extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMusic();
    }

    render() {
        return (
            <div className="cp-music">
                <h3>Music list: </h3>
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
