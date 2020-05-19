const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

const soma = process.argv[2];

switch (soma) {
  case 'soma':
    console.log("Resposta: ", number1 + number2)
    break;
  case 'sub':
    console.log("Resposta: ", number1 - number2)
    break;
  case 'multi':
    console.log("Resposta: ", number1 * number2)
    break;
  case 'divisao':
    console.log("Resposta: ", number1 / number2)
    break;
  default:
    console.log("Erro!")
}
