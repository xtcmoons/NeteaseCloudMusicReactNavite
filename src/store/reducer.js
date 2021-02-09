import {combineReducers} from 'redux';
import {reducer as recommendReducer} from '../pages/home/store/index';
import {reducer as playlistCatlistReducer} from '../pages/playlist/store/index';

export default combineReducers({
  recommend: recommendReducer,
  playlistCatlist: playlistCatlistReducer,
});
