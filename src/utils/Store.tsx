// Store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice';  // Import the reducer from your slice file
import JsonSlice from './JsonSlice';
import ProfileSlice from './ProfileSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer, 
        jsonData:JsonSlice,
        profileData:ProfileSlice,
    },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
