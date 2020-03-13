/* Exercícios de interpretação de código */

//Exercício 1 - Função que realiza a conversão do valor inserido no console de acordo com o valor da cotação em dólares passada no console. Resultado: 21,46

//Exercício 2 - Função para realização de investimento, abaixo há uma verificação a partir da entrada de "valor/tipo" de investimento realizado, cada case há um tipo de rendimento diferente. Entretanto, se não houver nenhuma entrada de "valor/tipo", aparece um alerta na tela. Resultado: 1º console => 165; 2º console => alerta: Tipo de investimento informado incorreto!

//Exercício 3 - Verifica se o numero é par ou impar e imprime na tela o tamanho do array depois da validação da condição. Para cada numero dentro do array números, se retornar um número par o array1 irá armazenar se não o array2 irá armazenar. 
//1º console => Quantidade total de números 13
//2º console => 7
//3º console => 7

//Exercício 4 - Verificação do maior e do menor número dentro do array números, para cada numero dentro do array número faça o seguinte, percorra o array e se o numero for a menor do array armazene dentro da variavel numero1, e se o for o maior numero do array, armazene na variavel2. 
//1º console => -18
//2º console => 1590


/* Exercícios de Lógica de programção*/
//Exercício 1 - array.forEach(); array.map(); array.filter().

//Exercício 2 
// a => false
// b => false
// c => true
// d => true
// e => true

//Exercício 3 - Não, pois houve um erro na condição em si, havendo assim um loop infinito, já que a pessoa esqueceu do i++ ao final do while

/*
const quantidadeDeNumerosPares
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
*/

//Exercício 4 
/*
function validarForma(a, b, c){
    if ( a == b && b == c){
        console.log("Triângulo Equilátero");      
    }else if(a != b && b != c && c != a){
        console.log("Triângulo Escaleno!"); 
    }else{
        console.log("Triângulo Isósceles");
    }
}

validarForma(4, 5, 6);
*/

//Exercício 5
/*
function programaDoisNumeros(a, b) {
    const subtNumeros = (-a) / (-b);
    if( a === b){
        console.log("Os números são iguais!")
    }else if(a < b ) {
        console.log("O número " ,a, " é menor que " ,b)
    } else {
        console.log("O número " ,a, " é maior que " ,b)
    }

    if (a % b === 0) {
        console.log(a, " é divisível por " ,b)
    } else {
        console.log(a, " não é divisível por ",b)
    }

    console.log("A diferença entres eles é " ,subtNumeros);
}

programaDoisNumeros(11, 2)
*/

/* Exercícios de Funções */
//Exercício 1 


//Exercício 2
function helloWorld() {
alert("Hello Future4");
};

helloWorld();
