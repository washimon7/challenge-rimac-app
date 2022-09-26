import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../app/store';
import { UserForm } from '../../types';
import {
  gotUserInfo,
  gotUserInfoSuccessfully,
  setIsGettingUserInfo,
} from '../reducers/insuranceSlice';
import { UserInfo } from '../../interfaces/userInterface';

type GetUserInfoActionProps = UserForm;

export const getUserInfoAction = ({}: GetUserInfoActionProps): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async dispatch => {
    dispatch(setIsGettingUserInfo(true));
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      const userInfo = (await response.json()) as UserInfo;
      if (userInfo) {
        dispatch(gotUserInfoSuccessfully(true));
        dispatch(gotUserInfo(userInfo));
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      dispatch(setIsGettingUserInfo(false));
    }
  };
};
