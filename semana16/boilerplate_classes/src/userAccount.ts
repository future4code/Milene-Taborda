import { Transaction } from './transaction';

export class UserAccount {
  private name: string;
  private cpf: string;
  private balance: number;
  private age: number;
  private transactions: Transaction[];

  constructor(name: string, cpf: string, age: number) {
    this.name = name,
    this.cpf = cpf,
    this.age = age
    this.balance = 0,
    this.transactions = []
  };

  public getBalance() : number {
    return 
  };

  public addBalance(): void {

    console.log('Saldo atualizado com sucesso')
  };

}