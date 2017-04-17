import { SET_MUSIC } from '../actions/musicActions';

export default function music(state = [], action = {}) {
    switch (action.type) {
        case SET_MUSIC:
            return action.music;
        default:
            return state;
    }
}
