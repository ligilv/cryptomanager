import { ADD_TO_FAV, REM_FROM_FAV } from "../actions/actions"
const initialState={
    favoriteCoin:[]
}
export const FavoriteReducer=(state=initialState, {type, payload})=>{
switch(type){
case ADD_TO_FAV:
    return [...favoriteCoin, payload] 
    default:return state
}
}