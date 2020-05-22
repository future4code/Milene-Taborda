"use strict";
exports.__esModule = true;
var fs = require("fs");
var moment = require("moment");
var createAccountUser_1 = require("../createAccountUser");
var name = process.argv[2];
var cpf = process.argv[3];
var value = Number(process.argv[4]);
var extractAccount = {
    value: value,
    date: moment(),
    description: "Depósito bancário"
};
function getBalance(name, cpf) {
    try {
        createAccountUser_1.accounts.find(function (account) {
            if (account.name === name && account.cpf === cpf) {
                return console.log("Saldo: R$", account.balance);
            }
            else {
                console.log("Usuário não encontrado!");
            }
        });
    }
    catch (_a) {
        console.log("Ocorreu um erro inesperado, tente novamente!");
    }
}
function addBalance(name, cpf, value) {
    createAccountUser_1.accounts.find(function (account) {
        if (account.name === name && account.cpf === cpf) {
            account.balance += value;
            //extractAccount.value = account.balance += value;
            account.extract.push(extractAccount);
            fs.writeFileSync(createAccountUser_1.fileUsers, JSON.stringify(createAccountUser_1.accounts));
            return console.log("Depositado com sucesso!");
        }
        else {
            console.log("Usuário não encontrado!");
        }
    });
}
//getBalance(name, cpf);
addBalance(name, cpf, value);
