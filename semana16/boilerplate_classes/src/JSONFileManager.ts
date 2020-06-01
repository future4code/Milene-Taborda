import * as fs from 'fs';
import { Bank } from './bank';
import { UserAccount } from './userAccount';

export class JSONFileManager {
  private fileName: string

  constructor(fileName: string) {
    this.fileName = fileName
  }

  writeObjectToFile(bank: Object ): void {
    fs.writeFileSync(this.fileName, JSON.stringify(bank, null, 2));
  }

  getObjectFromFile(): any {
   return JSON.parse(fs.readFileSync(this.fileName).toString());
  }
}