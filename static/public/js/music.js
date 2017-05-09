import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import MusicList from './components/musicList';
import { getMusic } from './actions/musicActions';

import testMusic from '../mp3/folk.mp3';

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            musicPerPage: 2
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getMusic();
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const music = this.props.music;
        const { currentPage, musicPerPage } = this.state;

        const indexOfLastMusic = currentPage * musicPerPage;
        const indexOfFirstMusic = indexOfLastMusic - musicPerPage;

        const currentMusic = music.slice(indexOfFirstMusic, indexOfLastMusic);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(music.length / musicPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li key={ number } id={ number } className={classnames('cp-page-numbers-item', { 'cp-page-numbers-item-active': this.state.currentPage == number }) } onClick={this.handleClick}>
                    { number }
                </li>
            );
        });

        return (
            <div className="cp-music">
                <h3>Music list: </h3>
                <MusicList music={ currentMusic } />
                <div>
                    <ul className="cp-page-numbers">
                        { renderPageNumbers }
                    </ul>
                </div>
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
