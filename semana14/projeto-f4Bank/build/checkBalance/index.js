"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const moment = require("moment");
const createAccountUser_1 = require("../createAccountUser");
function getBalance(name, cpf) {
    try {
        createAccountUser_1.accounts.find((account) => {
            if (account.name === name && account.cpf === cpf) {
                return console.log("Saldo: R$", account.balance);
            }
            else {
                console.log("Usuário não encontrado!");
            }
            ;
        });
    }
    catch (_a) {
        console.log("Ocorreu um erro inesperado, tente novamente!");
    }
}
function addBalance(name, cpf, value, date) {
    const formatedDate = date.format("L");
    const extractAccount = {
        value: value,
        date: formatedDate,
        description: "Depósito bancário",
    };
    createAccountUser_1.accounts.find((account) => {
        if (account.name === name && account.cpf === cpf) {
            account.balance += value;
            account.extract.push(extractAccount);
            fs.writeFileSync(createAccountUser_1.fileUsers, JSON.stringify(createAccountUser_1.accounts));
            return console.log("Depositado com sucesso!");
        }
        else {
            console.log("Usuário não encontrado!");
        }
        ;
    });
}
function payBill(name, description, value, date) {
    const today = moment().format("L");
    let formatedDate;
    let differentDate;
    const todayUnix = moment().unix();
    if (!date) {
        formatedDate = today;
        differentDate = todayUnix;
    }
    else {
        formatedDate = date.format("L");
        differentDate = date.unix();
    }
    const transaction = {
        value: -value,
        date: formatedDate,
        description: description,
    };
    const result = differentDate - todayUnix;
    if (result >= 0) {
        createAccountUser_1.accounts.find((account) => {
            if (account.name === name && account.balance >= value) {
                account.transactions.push(transaction);
                fs.writeFileSync(createAccountUser_1.fileUsers, JSON.stringify(createAccountUser_1.accounts));
            }
            else {
                console.log("Usuário não encontrado ou saldo inferior");
            }
        });
    }
    else {
        console.log("Insira uma data válida");
    }
}
function updateBalance(name, cpf) {
    createAccountUser_1.accounts.find((account) => {
        if (account.name === name && account.cpf === cpf) {
            account.transactions.map((transaction) => {
                account.balance += transaction.value;
                account.extract.push(transaction);
            });
            account.transactions = [];
            fs.writeFileSync(createAccountUser_1.fileUsers, JSON.stringify(createAccountUser_1.accounts));
            console.log("Atualizado com sucesso");
        }
        else {
            console.log("Usuário não encontrado!");
        }
    });
}
function performTransfer(name, cpf, destinationName, destinationCpf, value) {
}
;
payBill(process.argv[2], process.argv[3], Number(process.argv[4]), moment(process.argv[5], "DD/MM/YYYY"));
//# sourceMappingURL=index.js.map