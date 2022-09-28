export const checkValidAmount = (amount: string): boolean => {
  const regex = /^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/;

  return regex.test(amount);
};
