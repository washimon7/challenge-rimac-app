import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUserInfoAction } from '../app/actions/getUserInfoAction';
import { useState } from 'react';
import { UserForm } from '../types';
import { checkFormIsNotEmpty } from '../utils/checkFormIsNotEmpty';
import { useNavigate } from 'react-router-dom';
import { gotUserInfoSuccessfully } from '../app/reducers/insuranceSlice';

const initialState: UserForm = {
  docNumber: '',
  cellphoneNumber: '',
  plateNumber: '',
};

export const useGetUserInfo = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isGettingUserInfo, justGotUserInfo } = useAppSelector(
    state => state.insurance
  );
  const [user, setUser] = useState<UserForm>(initialState);
  const [isAcceptedTerms, setIsAcceptedTerms] = useState<boolean>(false);
  const canSubmit: boolean = checkFormIsNotEmpty(user) && isAcceptedTerms;

  useEffect(() => {
    if (justGotUserInfo) {
      navigate('/arma-tu-plan');
    }
  }, [justGotUserInfo]);

  useEffect(() => {
    return () => {
      dispatch(gotUserInfoSuccessfully(false));
    };
  }, []);

  const handleCheckboxChange = () => {
    setIsAcceptedTerms(!isAcceptedTerms);
  };

  const handleInputChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value as string;
    if (name === 'plateNumber') {
      const newValue = value.toUpperCase();
      setUser({
        ...user,
        [name]: newValue,
      });
      return;
    }
    setUser({
      ...user,
      [name]: value,
    });
  };

  const doGetUserInfo = (e: any) => {
    e.preventDefault();
    console.log('Getting..');

    dispatch(getUserInfoAction(user));
  };

  return {
    isGettingUserInfo,
    user,
    canSubmit,
    isAcceptedTerms,
    handleCheckboxChange,
    handleInputChange,
    doGetUserInfo,
  };
};
