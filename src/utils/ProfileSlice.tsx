import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileDataState {
  data: Record<string, any>;
}

interface UpdateFieldPayload {
  field: string;
  value: any;
}

const initialState: ProfileDataState = {
  data: {
    name: null,
    email: null,
    phone: null,
    pic: null,
    toggle: false,
  },
};

const profileSlice = createSlice({
  name: 'profileData',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { field, value } = action.payload;
      state.data[field] = value;
    },
  },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;