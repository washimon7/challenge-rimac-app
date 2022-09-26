import { useAppSelector } from '../app/hooks';

export const useQuoteInsurance = () => {
  const { userInfo } = useAppSelector(state => state.insurance);

  return { userInfo };
};
