// Store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice';  // Import the reducer from your slice file
import JsonSlice from './JsonSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer, 
        jsonData:JsonSlice,
    },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
