import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GetLocation from "../../models/GetLocation";
import SessionStorage from "../../services/SessionStorage";

interface PlaceState {
    places: GetLocation[];
}


const initialState: PlaceState = {
    places: (() => {
        const storedPlaces = SessionStorage.getItem('places');
        return storedPlaces ? JSON.parse(storedPlaces) : [];
    })()
};



const placeSlice = createSlice({
    name: "places",
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<GetLocation[]>) => {
            state.places = action.payload;
            SessionStorage.setItem("places", JSON.stringify(state.places));
        }
    }
});

export const { setValue } = placeSlice.actions;
export const placeReducer = placeSlice.reducer;
