import {SET_DATA} from '../types';
const initialState = {
  name: '',
  search_data: null,
};
const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        search_data: action.payload,
      };

    default:
      return state;
  }
};
export default SearchReducer;
