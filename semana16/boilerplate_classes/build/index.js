"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const userAccount_1 = require("./userAccount");
const fileManager = new JSONFileManager_1.JSONFileManager('todoAccounts.json');
const dateUser = new userAccount_1.UserAccount(process.argv[4], process.argv[5], Number(process.argv[6]));
fileManager.writeObjectToFile(dateUser);
console.log("oi");
console.log(fileManager.getObjectFromFile());
//# sourceMappingURL=index.js.map