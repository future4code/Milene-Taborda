"use strict";
exports.__esModule = true;
exports.accounts = exports.fileUsers = void 0;
var moment = require("moment");
var fs = require("fs");
moment.locale('pt-br');
exports.fileUsers = '../todoUsers.json';
exports.accounts = require('../todoUsers.json');
var createAccountUser = {
    name: process.argv[2],
    cpf: process.argv[3],
    birthDate: moment(process.argv[4], 'DD/MM/YYYY'),
    balance: 0,
    extract: []
};
function createAccount() {
    var age = Math.floor(moment(new Date()).diff(moment(createAccountUser.birthDate), 'years', true));
    try {
        if (age >= 18) {
            var checkCpf = exports.accounts.find(function (account) {
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
        var data = fs.readFileSync(exports.fileUsers);
        var treatedData = data.toString();
        console.log(treatedData);
    }
    catch (_a) {
        console.log("Ocorreu um erro inesperado, tente novamente!");
    }
    ;
}
;
//createAccount();
//getAllAccounts();
// const extractAccount: extract = {
//   value: 0, 
//   date: moment('DD/MM/YYYY'), 
//   description: "Transferência Online"
// }
// console.log(`Seja bem vindo(a) ${createAccountUser.name}!`);
// console.log('-----------Personal Data-----------');
// console.log('CPF: ', createAccountUser.cpf);
// console.log('Data Nasc. :', createAccountUser.birthDate);
// console.log('-----------Extract-----------');
// console.log(extractAccount);
