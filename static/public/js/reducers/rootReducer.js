import { combineReducers } from 'redux';

import pictures from './galleryReducer';
import flashMessages from './flashMessagesReducer';
import { sorts } from './galleryReducer';

export default combineReducers({
    pictures,
    flashMessages,
    sorts
});
