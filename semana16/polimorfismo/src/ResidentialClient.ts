import { Residence } from "./Residence";
import { Client } from "./Client";

export class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumeEnergy: number,
    private cpf: string,
    dwellersQuantity: number,
    cep: string
  ) {
    super(dwellersQuantity, cep);
  };

  getCpf(): string {
    return this.cpf;
  };

  calculateBill(): number {
    return this.consumeEnergy *  0.75;
  };
}