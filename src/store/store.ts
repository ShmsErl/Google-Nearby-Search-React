import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { placeReducer } from "./slice/PlaceSlice";
import { loadingReducer } from "./slice/loadingSlice";
import { searchReducer } from "./slice/searchSlice";


const rootReducer = combineReducers({
    place:placeReducer,
    loading:loadingReducer,
    app: searchReducer,
    
 

});

export const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;

export default store;
