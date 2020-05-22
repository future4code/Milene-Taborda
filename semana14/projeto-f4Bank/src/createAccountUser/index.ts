
export {};
import * as moment from 'moment';
import * as fs from 'fs';

moment.locale('pt-br');
export const fileUsers: string = '../todoUsers.json';
export const accounts = require('../todoUsers.json');

type account = {
  name: string,
  cpf: string,
  birthDate:  moment.Moment,
  balance: number,
  extract: extract[]
};

export type extract = {
  value: number,
  description: string,
  date: moment.Moment,
};

const createAccountUser: account = {
  name: process.argv[2],
  cpf: process.argv[3],
  birthDate: moment(process.argv[4], 'DD/MM/YYYY'),
  balance: 0,
  extract: []
};

function createAccount() {

  const age = Math.floor(moment(new Date()).diff(moment(createAccountUser.birthDate),'years',true));
  
  try {
    if(age >= 18){
      const checkCpf = accounts.find((account: any) => {
        return account.cpf === createAccountUser.cpf
      });

      if(checkCpf) {
        console.log("CPF já cadastrado!")
      } else {
        accounts.push(createAccountUser);
        fs.writeFileSync(fileUsers, JSON.stringify(accounts));
    
        console.log('Conta criada com sucesso!');
      };

    } else{
    console.log("Desculpe, apenas usuários com mais de 18 anos podem se cadastrar!");
    }} catch {
    console.log("Ocorreu um erro inesperado, tente novamente!");
  };
};

function getAllAccounts() {
  try{
    const data: Buffer = fs.readFileSync(fileUsers);
    const treatedData: string = data.toString();
    console.log(treatedData);
  }catch {
    console.log("Ocorreu um erro inesperado, tente novamente!");
  };
};

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
