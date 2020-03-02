
/***********  INTERPRETAÇÃO DE CÓDIGO ***********/

//EXERCÍCIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)

console.log("e. ", typeof resultado)

/*
LEITURA DO CÓDIGO
a. atribui a resultado os valores do bool1 e bool2 e bool3
b. reatribui a variavel, os valores do bool2 ou bool1 e diferente boll3
c. reatribuir a variavel, diferença(negação) do resultado e bool1 ou bool1
d. reatribuir a variavel, o resultado (negação bool1 ou bool2)
e. imprimindo o tipo da variavel

//RESULTADO CONSOLE
a . false
b. false
c. true
d.false
e. boolean
*/

//EXERCÍCIO 2

let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)


/* LEITURA DO CÓDIGO

I. Imprimindo uma variavel indefinida
II. Imprimindo uma variavel null
III. Imprimindo a quantidade de elementos de uma array (resultado: 11)
IV. Criando variavel recebendo valor/posição 0 e imprimindo o array na posição 0 e posição 1 (Resultado: 3 e 4)
V. Reatribuindo um outro valor(19) a posição 2; e criando uma variavel que recebe o valor da posição 6(9) (Resultado: 19 e 9)
VI. Variavel i somado ao valor dele + 1, ou seja 0 + 0 + 1. Apos subtraido a 1, ou seja 1 - 1 [0] (Resultado: 3)
VII.A variavel i recebe o valor da ultima posição , e subtrai a 3 casas anteriores a partir da ultima. Atribuimos a variavelC o resultado da subtração anterior(2) porcento do valor da posição 1 (3) (Resultado: 1) 


a. O que é `array` e como se declara em `JS`?
Arrays são usados para armazenar vários valores em uma única variável. let Array = [n1, n2, n3]

b. Qual o index inicial de um `array`?
Array[0]

c. Como se determinar o tamanho do `array`?
Array.length

d. Indique todas as mensagens impressas no console.
I.  undefined
II.  null
III.  11
IV.  3  e  4
V.  19  e  9
VI.  3
VII.  1
*/

//EXERCÍCIO 3

/***********  ESCRITA DE CÓDIGO ***********/

// FAHRENHEIT => KELVIN 
const kelvin = (77 - 32)*5/9 + 273.15
console.log(kelvin)  //Resultado: 298.15


// CELSIUS => FAHRENHEIT
const fahrenheit = (80*1.8)+32
console.log(fahrenheit) //Resultado 176


// CELSIUS => FAHRENHEIT && KELVIN 
const fahrenheit1 = (30*1.8)+32
const kelvin1 = 30+273.15
console.log("FAHRENHEIT: " + fahrenheit1 + " KELVIN: " + kelvin1) //Resultado: FAHRENHEIT: 86 KELVIN: 303.15


//CELSIUS => FAHRENHEIT && KELVIN 
const celsius = Number(prompt("Informe o Celsius"))
const fahrenheit2 = (celsius*1.8)+32

const kelvin2 = (celsius+273.15)
console.log("FAHRENHEIT: " + fahrenheit2 + " KELVIN: " + kelvin2) //Resultado: FAHRENHEIT: 86 KELVIN: 303.15 


//ATIVIDADE 2

const nome = prompt("Fala Dev, qual é seu nome?");
console.log("Nome: " + nome );

const idade = Number(prompt("Qual é sua idade?"));
console.log("Idade: " + idade);

const estado = prompt("Em que estado você mora?");
console.log("Estado: " + estado);

const cidade = prompt("Show! Em qual cidade do Estado de " + estado + " você mora?");
console.log("Cidade: " + cidade);

const pessoal = prompt(  cidade +" é um lugar maravilhoso! O que você mais gosta da sua cidade?");
console.log("O que mais gosta da cidade: " + pessoal);

/*
Resultado :
Nome: Milene
Idade: 21
Estado: Tocantins
Cidade: Pedro Afonso
O que mais gosta da cidade: gastronomia */


//ATIVIDADE 3

const Kwh = Number(prompt("Informe o consumo de energia em Quilowatts"));
const salario = Number(prompt("Informe o valor do salário"));
const desconto = Number(prompt("Informe a porcentagem de desconto. Desconsidere o sinal (%)"));

const a = Kwh*0.05;
const b = (desconto*a)/100;
const c = a - b;
const d = salario - c;

console.log("KWH em Real: R$" + a ); //Resultado: KWH em Real: R$14
console.log("Desconto: R$" + b ); //Resultado: Desconto: R$2.1
console.log("Total: R$" + c ); //Resultado: Total: R$11.9
console.log("Total salário: " + d); //Resultado: Total salário: 986.1


/***********  DESAFIO ***********/

// LIBRA => QUILOGRAMA
const lb = 20 / 2.2046;
console.log("20lb equivalem a " +  lb +" kg"); //Resultado: 20lb equivalem a 9.071940488070398 kg


// ONÇA => QUILOGRAMA
const oz = 10.5 / 35.274;
console.log("10oz equivalem a " +  oz +" kg");

// MILHA => METRO
const mi = 100 / 0.00062137;
console.log("100mi equivalem a " +  mi +" m");

// PÉS => METRO
const ft = 50 / 3.2808;
console.log("50ft equivalem a " +  ft +" m");

// GALÃO => US LITRO
const gal = 103.56 / 0.26417;
console.log("103.56gal equivalem a " +  gal +" l");

// XÍCARA => US LITRO

const xic = 450 / 0.26417;
console.log("450xic equivalem a " +  xic +"L");

// ONÇA (valor inserido pelo usuário) => QUILOGRAMA
const ozUsuario = Number(prompt("Insira o valor Onça(oz)"))
const resultadoOz = ozUsuario / 35.274;
console.log( ozUsuario + "oz equivalem a " +  resultadoOz +" kg");