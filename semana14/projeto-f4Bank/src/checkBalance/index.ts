export {};
import * as fs from 'fs';
import * as moment from 'moment';
import { fileUsers, accounts, extract } from '../createAccountUser';

function getBalance (name: string , cpf: string)  {
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

function addBalance(name: string, cpf: string, value: number, date: moment.Moment) {

  const formatedDate = date.format("L");

  const extractAccount: extract = {
    value: value, 
    date: formatedDate, 
    description: "Depósito bancário",
  }

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

function payBill (name: string,  description: string, value: number, date: moment.Moment ) {
  const today = moment().format("L");
  let formatedDate;
  let differentDate;
  const todayUnix = moment().unix();
  
 if(!date) {
  formatedDate = today;
  differentDate = todayUnix;
 } else {
  formatedDate = date.format("L");
  differentDate = date.unix();
 }

const transaction: extract = {
  value: -value, 
  date: formatedDate, 
  description: description,
}
   
const result = differentDate - todayUnix

  if(result >= 0) {
    accounts.find((account: any) => {
      if(account.name === name && account.balance >= value) {
        account.transactions.push(transaction);
        fs.writeFileSync(fileUsers, JSON.stringify(accounts));
  
      } else {
        console.log("Usuário não encontrado ou saldo inferior");
      }
    })
  } else {
   console.log("Insira uma data válida") 
  }
} 

function updateBalance (name: string, cpf: string,): void {
 accounts.find((account: any) => {
  if(account.name === name && account.cpf === cpf) {
    account.transactions.map((transaction: any) => {
      account.balance += transaction.value
      account.extract.push(transaction); 
    });
    account.transactions = [];
    fs.writeFileSync(fileUsers, JSON.stringify(accounts));
    console.log("Atualizado com sucesso");
  } else {
    console.log("Usuário não encontrado!");
  }
 });
}

function performTransfer(name: string, cpf: string, destinationName: string, destinationCpf: string, value: number) {};

//getBalance(name, cpf);
//addBalance(process.argv[2], process.argv[3], Number(process.argv[4]), moment(process.argv[5] , "DD/MM/YYYY"));
//payBill(process.argv[2], process.argv[3], Number(process.argv[4]), moment(process.argv[5] , "DD/MM/YYYY"));
//updateBalance(process.argv[2], process.argv[3]);
