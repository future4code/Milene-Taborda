import { Employee } from "./Employee";

export class Seller extends Employee{
 private salesQuantity : number = 0;
 static SELLING_COMMISSION: number = 5;

getSalesQuantity(): number {
  return this.salesQuantity
}

 setSalesQuantity(num: number): void {
   this.salesQuantity = num
 }

calculateTotalSalary(): number {
  return super.getCalculateTotalSalary() + Seller.SELLING_COMMISSION *  this.salesQuantity
}

};