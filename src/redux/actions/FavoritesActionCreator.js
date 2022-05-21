import { ADD_TO_FAV, REM_FROM_FAV } from "./actions";
export const addtofav=(coinName)=>{
    return{
        type:ADD_TO_FAV,
        payload:coinName
    }
}
export const remFromFav=(coinName)=>{
    return{
        type:REM_FROM_FAV,
        payload:coinName
    }
}