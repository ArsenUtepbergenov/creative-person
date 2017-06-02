import { combineReducers } from 'redux';

import music from './musicReducer';
import pictures from './galleryReducer';
import flashMessages from './flashMessagesReducer';
import { sorts } from './galleryReducer';

export default combineReducers({
    music,
    pictures,
    flashMessages,
    sorts
});
