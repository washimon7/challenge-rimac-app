import { Coverage } from '../types';

export const getMonthlyInsurancePrice = (
  baseAmountByMonth: string,
  coverages: Coverage[]
): string => {
  let amount = baseAmountByMonth;

  coverages.forEach(coverage => {
    if (coverage.insured) {
      amount = (Number(amount) + Number(coverage.price)).toString();
    }
  });

  return amount;
};
