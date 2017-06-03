import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/flashMessagesActions';
import { _getId } from '../utilities/utilities';

export default function flashMessages(state = [], action = {}) {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: _getId(1, 1000),
                    type: action.message.type,
                    text: action.message.text
                }
            ];
        break;
        case DELETE_FLASH_MESSAGE:
            return state.filter(message => message.id !== action.id);﻿
        break;
        default:
            return state;
    }
}
