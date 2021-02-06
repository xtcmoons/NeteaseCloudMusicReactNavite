import {combineReducers} from 'redux';
import {reducer as recommendReducer} from '../pages/home/store/index';

export default combineReducers({
  recommend: recommendReducer,
});
