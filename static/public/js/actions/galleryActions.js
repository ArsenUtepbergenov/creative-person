import axios from 'axios';

export const SET_PICTURES = 'SET_PICTURES';
export const ADD_PICTURE = 'ADD_PICTURE';
export const GET_PICTURE = 'GET_PICTURE';
export const DELETE_PICTURE = 'DELETE_PICTURE';
export const SET_RATING = 'SET_RATING';
export const UPDATE_PICTURE = 'UPDATE_PICTURE';

export function ratingChange(rating) {
    return {
        type: SET_RATING,
        rating
    }
}

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

export function pictureUpdated(picture) {
    return {
        type: UPDATE_PICTURE,
        picture
    }
}

export function pictureDeleted(id) {
    return {
        type: DELETE_PICTURE,
        id
    }
}

export function pictureFetched(picture) {
    return {
        type: GET_PICTURE,
        picture
    }
}

export function onRatingChange(rating) {
    return dispatch => {
        return dispatch(ratingChange(rating));
    }
}

export function savePicture(data) {
    return dispatch => {
        return axios.post('/api/gallery', data).then(dispatch(addPicture(data)));
    }
}

export function updatePicture(data) {
    return dispatch => {
        return axios.put(`/api/gallery/${data.id}`, data).then(dispatch(pictureUpdated(data)));
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

export function getPicture(id) {
    return dispatch => {
        return axios.get(`/api/gallery/${id}`).then(results => dispatch(pictureFetched(results.data)));
    }
}
