
export {};
import * as moment from 'moment';
import * as fs from 'fs';

moment.locale('pt-br');
export const fileUsers: string = 'todoUsers.json';
export const accounts = require('../../todoUsers.json');

type account = {
  name: string,
  cpf: string,
  birthDate:  string,
  balance: number,
  extract: extract[]
  transactions: extract[]
};

export type extract = {
  value: number,
  description: string,
  date: string,
};


function createAccount(name: string, cpf: string, birthDate: moment.Moment) {

  const formatedBirthDate = birthDate.format("L");

  const createAccountUser: account = {
    name,
    cpf ,
    birthDate: formatedBirthDate,
    balance: 0,
    extract: [],
    transactions: []
  };

  const age = Math.floor(moment(new Date()).diff(moment(birthDate),'years',true));

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

//createAccount(process.argv[2], process.argv[3], moment(process.argv[4], 'DD/MM/YYYY') );
getAllAccounts();
