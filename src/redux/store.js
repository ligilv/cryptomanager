import { rootReducer } from "./reducers/rootreducer";
import { createStore } from "redux";
export const store=createStore(rootReducer)