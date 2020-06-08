import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class ComercialClient extends Commerce implements Client {
  constructor(
    public name: string, 
    public registrationNumber: number, 
    public consumeEnergy: number, 
    private cnpj: string,
     floorsQuantity: number, 
     cep: string) {
    super(floorsQuantity, cep)
  };

  calculateBill(): number {
    return this.consumeEnergy * 0.53;
  };

  getCnpj(): string {
    return this.cnpj
  };
}