import * as actionTypes from './constants';

const defaultState = {
  sub: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.PLAYLIST_CATLIST: {
      console.log('play list reducer --------> ', action.data.categories);
      let categories = action.data.categories;
      let catKeys = Object.keys(categories);
      let catValues = Object.values(categories);
      console.log(' catkeys -----> ', catKeys);
      console.log(' catkeys -----> ', catValues);

      let tempArr = action.data.sub;
      let arr1 = tempArr.filter((item) => {
        if (item.category + '' === catKeys[0]) {
          return true;
        }
        return false;
      });
      console.log('---------> ', arr1);

      return {
        ...state,
        sub: [...action.data.sub],
      };
    }
    default:
      return state;
  }
};
