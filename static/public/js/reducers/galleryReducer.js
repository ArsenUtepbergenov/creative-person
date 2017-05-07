import { SET_PICTURES, ADD_PICTURE, DELETE_PICTURE, SET_RATING } from '../actions/galleryActions';

export default function pictures(state = [], action = {}) {
    switch (action.type) {
        case SET_PICTURES:
            return action.pictures;
        break;
        case ADD_PICTURE:
            return [
                ...state,
                action.picture
            ];
        break;
        case DELETE_PICTURE:
            return state.filter(item => item.id !== action.id);
        break;
        default:
            return state;
    }
}

export function sorts(state = { rating: 'all' }, action = {}) {
    switch (action.type) {
        case SET_RATING:
            return {
                rating: action.rating
            }
        break;
        default:
            return state;
    }
}
