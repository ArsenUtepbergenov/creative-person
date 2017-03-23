import axios from 'axios';

export const SET_MUSIC = 'SET_MUSIC';

export function setMusic(music) {
    return {
        type: SET_MUSIC,
        music
    }
}

export function getMusic() {
    return dispatch => {
        return axios.get('/api/music').then(results => dispatch(setMusic(results.data)));
    }
}
