/*************** INTERPRETAÇÃO DO CÓDIGO ***************/


// EXERCÍCIO 1
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
/*Resposta: Percorre até o index 14 e soma todos os elementos.
Console: 105 */

//EXERCÍCIO 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista){
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)
/*Resposta: a. Adiciona um elemento ao final da variavel.
b. (4) [10, 15, 25, 30]
c. (6) [12, 15, 18, 21, 27, 30] , [12]
*/

/*************** ESCRITA DE CÓDIGO ***************/

//EXERCÍCIO 3 (A)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let maior = arrayOriginal[0];
let menor = arrayOriginal[0];
const novoArray = [];

for(let numero of arrayOriginal) {
  if(numero > maior) {
    maior = numero;
  } else if (numero < menor) {
    menor = numero;
  }
}
console.log("O maior número é " ,maior, "e o menor é " ,menor);
//Console: a. "O maior número é 130 e o menor é 21"


//EXERCÍCIO 3 (B)
let outroArrayb = [];

for(let i =0; i < arrayOriginal.length; i++){
 outroArrayb.push(arrayOriginal[i]/10);
}
console.log(outroArrayb)



//EXERCÍCIO 3 (C)
const par = [];

for (let i = 0; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i] % 2 === 0) {
    par.push(arrayOriginal[i]);
  }
}
 console.log(par)
//Console: [80, 30, 130, 40, 60, 70, 120, 90, 110]

//EXERCÍCIO 3 (D)
const todosIndex = [];

for (let i = 0; i < arrayOriginal.length; i++) {
  todosIndex.push(arrayOriginal[i]);
  console.log("O elemento do índex " ,[i], " é " ,[todosIndex[i]])
}

/* Console: 
[ 'O elemento do índex 0 é 80',
  'O elemento do índex 1 é 30',
  'O elemento do índex 2 é 130',
  'O elemento do índex 3 é 40',
  'O elemento do índex 4 é 60',
  'O elemento do índex 5 é 21',
  'O elemento do índex 6 é 70',
  'O elemento do índex 7 é 120',
  'O elemento do índex 8 é 90',
  'O elemento do índex 9 é 103',
  'O elemento do índex 10 é 110',
  'O elemento do índex 11 é 55' ]
*/


/*************** DESAFIO 01 ***************/
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

/* 
0
00
000
0000
*/

/*************** DESAFIO 02 ***************/
const primeiroNumero = Number(prompt("Olá jogador! Escolha um número! "));
console.log("Vamos jogar!");

let chute = Number(prompt("Jogador(a) adivinhe o número!"));
let erros = 0;


while(chute !== primeiroNumero || chute === primeiroNumero){
  if (chute === primeiroNumero) {
    erros += 1;
    console.log("Aceeeeeertou!")
  } else if (chute < primeiroNumero){
    erros += 1;
  console.log("Errrrrrrou!");
  console.log("O número é maior");
  chute = Number(prompt("Jogador(a) adivinhe o número!"));
  } else {
    erros += 1;
    console.log("Errrrrrrou!");
    console.log("O número é menor! ");
    chute = Number(prompt("Jogador(a) adivinhe o número!"));
  }
}

