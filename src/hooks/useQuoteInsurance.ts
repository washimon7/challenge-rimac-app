import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import {
  justSelectedInsuranceAmount,
  justSelectedMontlyInsurancePrice,
  missedUser,
} from '../app/reducers/insuranceSlice';
import { checkValidAmount } from '../utils/checkValidAmount';
import { Coverage } from '../types';
import { getMonthlyInsurancePrice } from '../utils/getMonthlyInsurancePrice';

const initialState: Coverage[] = [
  {
    name: 'stolenTire',
    insurance: 'Llanta robada',
    description:
      'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo Sant Cugat, al lado de Barcelona con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis.',
    insured: false,
    price: '15',
  },
  {
    name: 'crashAndOrCrossRedLight',
    insurance: 'Choque y/o pasarte la luz roja',
    description:
      'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo Sant Cugat, al lado de Barcelona con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis.',
    insured: false,
    price: '20',
  },
  {
    name: 'hitSomeoneWithACar',
    insurance: 'Atropello en la vía Evitamiento',
    description:
      'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo Sant Cugat, al lado de Barcelona con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis.',
    insured: false,
    price: '50',
  },
];

export const useQuoteInsurance = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userInfo } = useAppSelector(state => state.insurance);
  const maxAmount: number = 16500;
  const minAmount: number = 12500;
  const baseAmountByMonth = '20';
  const [amountToInsureVehicle, setAmountToInsureVehicle] =
    useState<string>('14300');
  const [coverages, setCoverages] = useState<Coverage[]>(initialState);
  const [hasError, setHasError] = useState<boolean>(false);
  let monthlyInsurancePrice: string = getMonthlyInsurancePrice(
    baseAmountByMonth,
    coverages
  );

  const resetLocalState = () => {
    setHasError(false);
    setAmountToInsureVehicle('14300');
    setCoverages(initialState);
    dispatch(justSelectedInsuranceAmount(''));
    dispatch(justSelectedMontlyInsurancePrice(''));
  };

  const handleInputChange = (e: any) => {
    const value = e.target.value as string;

    if (!checkValidAmount(value)) {
      return;
    }

    setAmountToInsureVehicle(value.toString());
  };

  const handleCheckboxChange = (value: boolean, name: string) => {
    const newCoverages = [...coverages].map(c =>
      c.name === name ? { ...c, insured: value } : c
    );
    setCoverages(newCoverages);
  };

  const increaseAmount = () => {
    const prevValue: number = Number(amountToInsureVehicle) + 100;
    if (prevValue > maxAmount) {
      return;
    }
    setAmountToInsureVehicle(prevValue.toString());
  };
  const decreaseAmount = () => {
    const prevValue: number = Number(amountToInsureVehicle) - 100;
    if (prevValue < minAmount) {
      return;
    }
    setAmountToInsureVehicle(prevValue.toString());
  };

  useEffect(() => {
    if (!userInfo) {
      resetLocalState();
      goToHome();
    }
  }, []);

  const goToHome = () => {
    resetLocalState();
    dispatch(missedUser());
    navigate('/');
  };

  const doRequireInsurance = () => {
    dispatch(justSelectedInsuranceAmount(amountToInsureVehicle));
    dispatch(justSelectedMontlyInsurancePrice(monthlyInsurancePrice));
    navigate('/gracias');
    resetLocalState();
  };

  return {
    userInfo,
    amountToInsureVehicle,
    coverages,
    monthlyInsurancePrice,
    handleInputChange,
    handleCheckboxChange,
    increaseAmount,
    decreaseAmount,
    goToHome,
    doRequireInsurance,
  };
};
