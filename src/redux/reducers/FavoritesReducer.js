import {ADD_TO_FAV, REM_FROM_FAV} from '../actions/actions';
let initialState = [];
// {
//   // favoriteCoin: [{name: 'bitcoin'}],
//   favoriteCoin: [],
// };
export const FavoriteReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_FAV:
      console.log('starred state', [...state, payload]);
      return [...state, payload];
    case REM_FROM_FAV:
      let filtered = state.filter(item => item.name !== payload.name);
      console.log('filtered', [...state]);
      state = filtered;
      return [...state];
    default:
      return state;
  }
};
