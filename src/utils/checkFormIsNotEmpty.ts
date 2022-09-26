import { UserForm } from '../types';

export const checkFormIsNotEmpty = (user: UserForm): boolean => {
  return (
    user.cellphoneNumber.trim() !== '' &&
    user.docNumber.trim() !== '' &&
    user.plateNumber.trim() !== ''
  );
};
