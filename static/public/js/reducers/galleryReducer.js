import { SET_PICTURES, ADD_PICTURE, DELETE_PICTURE } from '../actions/galleryActions';

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
