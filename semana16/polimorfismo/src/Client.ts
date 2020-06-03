export interface Client {
  name: string;
  registrationNumber: number;
  consumeEnergy: number;

  calculateBill(): number;
};
