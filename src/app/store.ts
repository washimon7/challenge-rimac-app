import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import insuranceReducer from './reducers/insuranceSlice';

export const store = configureStore({
  reducer: {
    insurance: insuranceReducer,
  },
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = any;
