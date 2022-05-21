import { combineReducers } from "redux";
import { FavoriteReducer } from "./FavoritesReducer";
export const rootReducer=combineReducers({
favorites:FavoriteReducer
})
