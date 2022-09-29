import { useAppSelector } from '../app/hooks';

export const useQuotedInsurance = () => {
  const { insuranceAmount, montlyInsurancePrice } = useAppSelector(
    state => state.insurance
  );

  return { insuranceAmount, montlyInsurancePrice };
};
