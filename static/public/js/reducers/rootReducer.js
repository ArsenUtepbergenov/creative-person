import { combineReducers } from 'redux';

import pictures from './galleryReducer';
import flashMessages from './flashMessagesReducer';
import { sorts } from './galleryReducer';
import authentication from './signinReducer';

export default combineReducers({
    authentication,
    pictures,
    flashMessages,
    sorts
});
