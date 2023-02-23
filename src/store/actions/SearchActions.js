import {SET_DATA} from '../types';
export const setSearchData = data => {
  try {
    return dispatch => {
      dispatch({
        type: SET_DATA,
        payload: data,
      });
    };
  } catch (e) {
    console.log(e);
  }
};
