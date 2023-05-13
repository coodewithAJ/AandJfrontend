import { configureStore,combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import cartSlice from "./Cart"
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
let rootReducer = combineReducers({
    user:UserSlice,
    cart:cartSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer:persistedReducer
})


export default store