import axios from 'axios';

export const SET_PICTURES = 'SET_PICTURES';
export const ADD_PICTURE = 'ADD_PICTURE';

export function setPictures(pictures) {
    return {
        type: SET_PICTURES,
        pictures
    }
}

export function addPicture(picture) {
    return {
        type: ADD_PICTURE,
        picture
    }
}

export function savePicture(userData) {
    return dispatch => {
        return axios.post('/api/gallery', userData).then(dispatch(addPicture(userData)));
    }
}

export function getPictures() {
    return dispatch => {
        return axios.get('/api/gallery').then(results => dispatch(setPictures(results.data)));
    }
}
