import { JSONFileManager } from "./JSONFileManager"
import { Bank } from "./bank";
import { UserAccount } from "./userAccount";

const fileManager = new JSONFileManager('todoAccounts.json');

const dateUser = new UserAccount(process.argv[4],process.argv[5], Number(process.argv[6]));
fileManager.writeObjectToFile(dateUser)

console.log("oi")
console.log(fileManager.getObjectFromFile());
