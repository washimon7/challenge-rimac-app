import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../interfaces/userInterface';

interface InsuranceState {
  userInfo: UserInfo | null;
  justGotUserInfo: boolean;
  isGettingUserInfo: boolean;
  montlyInsurancePrice: string;
  insuranceAmount: string;
}

const initialState: InsuranceState = {
  userInfo: null,
  justGotUserInfo: false,
  isGettingUserInfo: false,
  montlyInsurancePrice: '',
  insuranceAmount: '',
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
    missedUser: (state: InsuranceState) => {
      state.userInfo = null;
    },
    justSelectedMontlyInsurancePrice: (
      state: InsuranceState,
      action: PayloadAction<string>
    ) => {
      state.montlyInsurancePrice = action.payload;
    },
    justSelectedInsuranceAmount: (
      state: InsuranceState,
      action: PayloadAction<string>
    ) => {
      state.insuranceAmount = action.payload;
    },
  },
});

export const {
  gotUserInfo,
  gotUserInfoSuccessfully,
  setIsGettingUserInfo,
  missedUser,
  justSelectedInsuranceAmount,
  justSelectedMontlyInsurancePrice,
} = insuranceSlice.actions;

export default insuranceSlice.reducer;
