import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../interfaces/userInterface';

interface InsuranceState {
  userInfo: UserInfo | null;
}

const initialState: InsuranceState = {
  userInfo: null,
};

export const insuranceSlice = createSlice({
  name: 'insurance',
  initialState,
  reducers: {
    gotUserInfo: (state: InsuranceState, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const {} = insuranceSlice.actions;

export default insuranceSlice.reducer;
