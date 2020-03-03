/*************** INTERPRETAÇÃO DO CÓDIGO ***************/


// EXERCÍCIO 1
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// Resposta: Verificar qual o resto da divisão de um número poe modúlo de 2, resulta em 0, ou seja, verificando se x é múltiplo de 2 (par).
// Exemplos 
// Não passou: 1, 3, 5 ..  Passou:0, 2, 4 ..


//EXERCÍCIO 2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//Resposta:A. Verfica o preço de uma determinada fruta. 
// B. O preço da fruta  Maçã  é  R$  2.25
// C. R$24.55
// D. Iria desconsiderar o valor da Pêra, resultando na mensagem: O preço da fruta  Pêra  é  R$  5


//EXERCÍCIO 3
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) { //
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

//Resposta: Uncaught ReferenceError: mensagem is not defined
//O erro ocorre pois, quando inserimos uma variável dentro de um bloco filho, ela consegue ser acessada apenas dentro de seu escopo, sendo assim não conseguindo ser acessada no escopo pai


/*************** ESCRITA DE CÓDIGO ***************/

//EXERCÍCIO 4
const num1 = Number(prompt("Insira o primeiro número"));
const num2 = Number(prompt("Insira o segundo número"));
const num3 = Number(prompt("Insira o terceiro número"));

if ((num1 < num2 ) && (num2 < num3)) {
    console.log("Ordem decrescente: " ,num3, "," ,num2, "," ,num1);
} else if ((num1 > num3 ) && ( num2 < num3 )) {
    console.log("Ordem decrescente: " ,num1, "," ,num3, "," ,num2);
} else if ((num1 < num2) && (num3 < num1 )) {
    console.log("Ordem decrescente: " ,num2, "," ,num1, "," ,num3);
} else if (num1 == num2 && num2 == num3 && num3 == num1) {
    console.log("Os números" ,num1,"," ,num2, "e" ,num3, " são iguais!" );
    alert("Não inserir números iguais.");   
} 
// a. Os números 1, 1 e 1 são iguais!
// b. Ordem decrescente: 15, 10, 5 
// c. Não inserir números iguais!


//EXERCÍCIO 5
//a. Foto postada junto a pasta do exercício.
//b.
let resposta1 = prompt("O animal é vertebrado? (s/n)");

if(resposta1 === "s" || resposta1 === "S") {
            
    resposta1 = prompt("Possui pelos? (s/n)");
    if (resposta1 === "s" || resposta1 === "S") {
        resposta1 = prompt("É racional? (s/n)");
            if (resposta1 === "s" || resposta1 === "S") {
                console.log("É um ser humano!")
            } else {
                console.log("É um mamífero não humano!")
            }
    } else {
        resposta1 = prompt("Possui penas? (s/n)");
        if (resposta1 === "s" || resposta1 === "S") {
            console.log("O animal é uma ave!");
        } else
        resposta1 = prompt("É terrestre? (s/n)");
        if (resposta1 === "s" || resposta1 === "S") {
            resposta1 = prompt("Ele passa uma parte da vida em ambiente aquático? (s/n)") 
                if (resposta1 === "s" || resposta1 === "S") {
                    console.log("O animal é um anfíbio!")
                } else {
                    console.log("O animal é um réptil")
                }
        } else {
            console.log("O animal é um peixe!")
        }
    }        
} else {
    console.log("O animal é invertebrado!");
}
       

  


