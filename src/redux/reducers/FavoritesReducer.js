import {ADD_TO_FAV, REM_FROM_FAV} from '../actions/actions';
const initialState = [];
// {
//   // favoriteCoin: [{name: 'bitcoin'}],
//   favoriteCoin: [],
// };
export const FavoriteReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_FAV:
      console.log('check diss', state);
      return [...state, payload];
    default:
      return state;
  }
};
