import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../interfaces/userInterface';

interface InsuranceState {
  userInfo: UserInfo | null;
  justGotUserInfo: boolean;
  isGettingUserInfo: boolean;
}

const initialState: InsuranceState = {
  userInfo: null,
  justGotUserInfo: false,
  isGettingUserInfo: false,
};

export const insuranceSlice = createSlice({
  name: 'insurance',
  initialState,
  reducers: {
    gotUserInfo: (state: InsuranceState, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    gotUserInfoSuccessfully: (
      state: InsuranceState,
      action: PayloadAction<boolean>
    ) => {
      state.justGotUserInfo = action.payload;
    },
    setIsGettingUserInfo: (
      state: InsuranceState,
      action: PayloadAction<boolean>
    ) => {
      state.isGettingUserInfo = action.payload;
    },
  },
});

export const { gotUserInfo, gotUserInfoSuccessfully, setIsGettingUserInfo } =
  insuranceSlice.actions;

export default insuranceSlice.reducer;
