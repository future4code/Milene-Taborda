import { Client } from "./Client";
import { Industry } from "./Industry";

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string, 
    public registrationNumber: number, 
    public consumeEnergy: number,
    private insdustryNumber: number, 
    machinesQuantity: number, 
    cep: string) {
    super(machinesQuantity, cep);
  };

  getIndustryNumber(): number {
    return this.insdustryNumber
  };

  calculateBill(): number {
    return this.consumeEnergy * 0.45 + this.machinesQuantity * 100
  };
}
