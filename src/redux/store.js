import { rootReducer } from "./reducers/rootreducer";
import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import { MMKV } from "react-native-mmkv"
const MMKVstorage = new MMKV()

export const reduxStorage = {
    setItem: (key, value) => {
      MMKVstorage.set(key, value)
      return Promise.resolve(true)
    },
    getItem: (key) => {
      const value = MMKVstorage.getString(key)
      return Promise.resolve(value)
    },
    removeItem: (key) => {
      MMKVstorage.delete(key)
      return Promise.resolve()
    },
  }

const persistConfig = {
    key: 'root',
    storage:reduxStorage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store=createStore(persistedReducer)
export let persistor = persistStore(store)