export type UserForm = {
  docNumber: string;
  cellphoneNumber: string;
  plateNumber: string;
};

export type CoveragesForm = {
  stolenTire: boolean;
  crashAndOrCrossRedLight: boolean;
  hitSomeoneWithACar: boolean;
};

export type Coverage = {
  name: string;
  insurance: string;
  description: string;
  insured: boolean;
  price: string;
};
