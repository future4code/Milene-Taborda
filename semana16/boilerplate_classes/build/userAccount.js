"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor(name, cpf, age) {
        this.name = name,
            this.cpf = cpf,
            this.age = age;
        this.balance = 0,
            this.transactions = [];
    }
    ;
    getBalance() {
        return;
    }
    ;
    addBalance() {
        console.log('Saldo atualizado com sucesso');
    }
    ;
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=userAccount.js.map