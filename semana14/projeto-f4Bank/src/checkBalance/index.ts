export {};
import * as fs from 'fs';
import * as moment from 'moment';
import { fileUsers, accounts, extract } from '../createAccountUser';

const name = process.argv[2];
const cpf = process.argv[3];
const value = Number(process.argv[4]);

const extractAccount: extract = {
    value: value, 
    date: moment(), 
    description: "Depósito bancário"
}

function getBalance(name: string , cpf: string) {
    try {
        accounts.find((account: any) => {
            if(account.name === name && account.cpf === cpf) {
                return console.log("Saldo: R$", account.balance);
            }else {
                console.log("Usuário não encontrado!");
            };
        });
    } catch {
        console.log("Ocorreu um erro inesperado, tente novamente!");
    }
}

function addBalance(name: string, cpf: string, value: number) {
    accounts.find((account: any) => {
        if(account.name === name && account.cpf === cpf) {
            account.balance += value;

            account.extract.push(extractAccount);

            fs.writeFileSync(fileUsers, JSON.stringify(accounts));

            return console.log("Depositado com sucesso!" );
            
        }else {
            console.log("Usuário não encontrado!");
        };
    });
}

//getBalance(name, cpf);
addBalance(name, cpf, value);
