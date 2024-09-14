// Store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice';  // Import the reducer from your slice file

export const store = configureStore({
    reducer: {
        auth: authReducer,  // Add your auth reducer here
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
