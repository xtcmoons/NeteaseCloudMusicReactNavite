import * as actionCreators from './constants';
import {getPlaylistCatlistRequest} from '../../../api/request';

export const changePlaylistCatlist = (data) => ({
  type: actionCreators.PLAYLIST_CATLIST,
  data: data,
});

export const getPlaylistCatlist = () => {
  return (dispatch) => {
    getPlaylistCatlistRequest()
      .then((res) => {
        dispatch(changePlaylistCatlist(res));
      })
      .catch((err) => {
        console.log('get playlist catlist error', err);
      });
  };
};
