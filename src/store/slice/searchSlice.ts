import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import SessionStorage from '../../services/SessionStorage';
import PostNearbySearch from '../../models/PostNearbySearch';

export interface AppState {
  latitude: number;
  longitude: number;
  radius: number;
}

const initialState: AppState = {
  latitude: 40.98700592287734,
  longitude: 29.052219428984184,
  radius: 0, 
};

const searchSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<PostNearbySearch>) {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.radius = action.payload.radius;
     
    },
  
  },
});

export const { setLocation } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;