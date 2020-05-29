"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accounts = exports.fileUsers = void 0;
const moment = require("moment");
const fs = require("fs");
moment.locale('pt-br');
exports.fileUsers = 'todoUsers.json';
exports.accounts = require('../../todoUsers.json');
function createAccount(name, cpf, birthDate) {
    const formatedBirthDate = birthDate.format("L");
    const createAccountUser = {
        name,
        cpf,
        birthDate: formatedBirthDate,
        balance: 0,
        extract: [],
        transactions: []
    };
    const age = Math.floor(moment(new Date()).diff(moment(birthDate), 'years', true));
    try {
        if (age >= 18) {
            const checkCpf = exports.accounts.find((account) => {
                return account.cpf === createAccountUser.cpf;
            });
            if (checkCpf) {
                console.log("CPF já cadastrado!");
            }
            else {
                exports.accounts.push(createAccountUser);
                fs.writeFileSync(exports.fileUsers, JSON.stringify(exports.accounts));
                console.log('Conta criada com sucesso!');
            }
            ;
        }
        else {
            console.log("Desculpe, apenas usuários com mais de 18 anos podem se cadastrar!");
        }
    }
    catch (_a) {
        console.log("Ocorreu um erro inesperado, tente novamente!");
    }
    ;
}
;
function getAllAccounts() {
    try {
        const data = fs.readFileSync(exports.fileUsers);
        const treatedData = data.toString();
        console.log(treatedData);
    }
    catch (_a) {
        console.log("Ocorreu um erro inesperado, tente novamente!");
    }
    ;
}
;
getAllAccounts();
//# sourceMappingURL=index.js.map