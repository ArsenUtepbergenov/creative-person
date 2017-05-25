import { SET_PICTURES, ADD_PICTURE, DELETE_PICTURE, SET_RATING, GET_PICTURE, UPDATE_PICTURE } from '../actions/galleryActions';

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
        case UPDATE_PICTURE:
            return state.map(item => {
                if (item.id == action.picture.id)
                    return action.picture;
                return item;
            });
        break;
        case GET_PICTURE:
            const index = state.findIndex(item => item.id == action.picture[0].id);
            if (index > -1) {
                return state.map(item => {
                    if (item.id == action.picture[0].id)
                        return action.picture[0];
                    return item;
                });
            }
            else {
                return [
                    ...state,
                    action.picture[0]
                ];
            }
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
