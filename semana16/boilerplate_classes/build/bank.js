"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor(fileManager, accounts) {
        this.accounts = accounts,
            this.fileManager = fileManager;
    }
    ;
    createAccount(account) {
        this.accounts.push(account);
    }
}
exports.Bank = Bank;
//# sourceMappingURL=bank.js.map