import { UserAccount } from "./userAccount";
import { JSONFileManager } from "./JSONFileManager";
import * as fs from 'fs';

export class Bank {
  private accounts: UserAccount[]
  private fileManager: JSONFileManager

  constructor(  fileManager: JSONFileManager, accounts: UserAccount[]) {
    this.accounts = accounts,
    this.fileManager = fileManager
  };

  createAccount(account: UserAccount): void {
    this.accounts.push(account);
  }

  // getAllAcounts(): UserAccount[] {
  //   try {
    
  //   }catch {
  //     console.log("Ocorreu um erro inesperado, tente novamente!");
  //   }
  // }

  //getAccountByCpf(): UserAccount {}

}
