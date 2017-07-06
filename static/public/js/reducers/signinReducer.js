import { SET_CURRENT_USER } from '../actions/signinActions';
import { _isEmpty } from '../utilities/utilities';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function authentication(state = initialState, action = {}) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !_isEmpty(action.user),
                user: action.user
            }
        break;
        default:
            return state;
    }
}
