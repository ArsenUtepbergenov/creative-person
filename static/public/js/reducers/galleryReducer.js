import { SET_PICTURES, ADD_PICTURE } from '../actions/galleryActions';

export default function pictures(state = [], action = {}) {
    switch (action.type) {
        case SET_PICTURES:
            return action.pictures;
        case ADD_PICTURE:
            return [
                ...state,
                action.picture
            ];
        default:
            return state;
    }
}
