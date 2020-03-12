/*************** INTERPRETAÇÃO DO CÓDIGO ***************/

//EXERCÍCIO 1
const minhaFuncao = (quantidade) => { 
	const array = []
	for(let i = 0; i < quantidade; i+=2) { 
			for(let j = 0; j < i; j++) { 
				array.push(j)
			}
	}
	return array
}

console.log(minhaFuncao(2)) //[]
console.log(minhaFuncao(5)) //[0, 1, 0, 1, 2, 3]
console.log(minhaFuncao(8)) //[0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

//EXERCÍCIO 2
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas")); //0, index de Darvas
console.log(funcao(arrayDeNomes, "João")); //2, index de Joao
console.log(funcao(arrayDeNomes, "Paula")); //Undefined, pois nao existe Paula no array
//b. sim, pois basta indicar o index que queremos.


//EXERCÍCIO 3
function metodo(array) { // SomaArray
  let resultadoA = 0;
  let resultadoB = 1;
  let arrayFinal = [];

  for (let x of array) { //let index of array
    resultadoA += x;
    resultadoB *= x;
  }

  arrayFinal.push(resultadoA);
  arrayFinal.push(resultadoB);
  return arrayFinal;
}

/*************** ESCRITA DE CÓDIGO ***************/
//EXERCÍCIO 4 (a)
let idadeCachorro = Number(prompt("Informe a idade do seu cachorro para o cálculo."));
let calculaIdade = (idadeCachorro) => {
  idadeCachorro *= 7;

  return idadeCachorro;
};

console.log(calculaIdade(idadeCachorro));


// EXERCÍCIO 4 (b)
let nome = prompt("Informe seu nome");
let idade = Number(prompt("Informe sua idade"));
let endereco = prompt("Informe seu endereço");
let estudante = prompt("Você é estudante? (sim/não)");

  let retornaInformacoes = (nome, idade, endereco, estudante) => {
    if(estudante){
      return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou estudante.";
  }else{
      return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e não sou estudante.";
  }
  }
  console.log(retornaInformacoes(nome, idade, endereco, estudante))



// EXERCÍCIO 5

let verificaSeculo = (ano) => {

  if(ano >= 1001 && ano <= 1100){
    return "O " + ano + " pertence ao século XI";
}else if(ano >= 1101 && ano <= 1200){
    return "O " + ano + " pertence ao século XII";
}else if(ano >= 1201 && ano <= 1300){
    return "O " + ano + " pertence ao século XIII";
}else if(ano >= 1301 && ano <= 1400){
    return "O " + ano + " pertence ao século XIV";
}else if(ano >= 1401 && ano <= 1500){
    return "O " + ano + " pertence ao século XV";
}else if(ano >= 1501 && ano <= 1600){
    return "O " + ano + " pertence ao século XVI";
}else if(ano >= 1601 && ano <= 1700){
    return "O " + ano + " pertence ao século XVII";
}else if(ano >= 1701 && ano <= 1800){
    return "O " + ano + " pertence ao século XVIII";
}else if(ano >= 1801 && ano <= 1900){
    return "O " + ano + " pertence ao século XIX";
}else if(ano >= 1901 && ano <= 2000){
    return "O " + ano + " pertence ao século XX";
}else if(ano >= 2001 && ano <= 2100){
    return "O " + ano + " pertence ao século XXI";
}else{
    return "Ano fora do intervalo entre 1000dc e 2020dc.";
}
}

console.log(verificaSeculo(2020));


//EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const tamanhoArray = (array) => {
  
  return array.length;
}
console.log(tamanhoArray(array));


const verificaBooleana = (num) => {
    if(num % 2 === 0) {
      return num + " é par"
    } else {
      return num + " é impar"
    }
}
console.log(verificaBooleana(10))

 
const quantidadeDePar = (array) => {
  let arrayPar = 0;
  for(let elemento of array){
      if(elemento%2 === 0){
          arrayPar++;
      }
  }
  return arrayPar;
}

let resultado = quantidadeDePar(array);
console.log("A quantidade de números pares é ", resultado);

