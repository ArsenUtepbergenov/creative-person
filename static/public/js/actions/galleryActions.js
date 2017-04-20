import axios from 'axios';

export const SET_PICTURES = 'SET_PICTURES';
export const ADD_PICTURE = 'ADD_PICTURE';
export const DELETE_PICTURE = 'DELETE_PICTURE';

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

export function pictureDeleted(id) {
    return {
        type: DELETE_PICTURE,
        id
    }
}

export function savePicture(userData) {
    return dispatch => {
        return axios.post('/api/gallery', userData).then(dispatch(addPicture(userData)));
    }
}

export function deletePicture(id) {
    return dispatch => {
        return axios.delete(`/api/gallery/${id}`, id).then(dispatch(pictureDeleted(id)));
    }
}

export function getPictures() {
    return dispatch => {
        return axios.get('/api/gallery').then(results => dispatch(setPictures(results.data)));
    }
}
