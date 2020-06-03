import { Client } from "./Client"
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { ClientManager } from "./ClientManager";
import { IndustrialClient } from "./IndustrialClient";
import { ComercialClient } from "./CommercialClient";
import { ResidentialClient } from "./ResidentialClient";

const client: Client = {
  name: "Milene Taborda",
  registrationNumber: 123,
  consumeEnergy: 33,

  calculateBill: () => {
    return 2
  }
};

console.log(client);

const istanceResidence = new Residence(2, "77710-000");
const istanceCommerce = new Commerce(5, "86460-000");
const istanceIndustry =  new Industry(10, "78370-000");

istanceResidence.getCep();
istanceCommerce.getCep();
istanceIndustry.getCep();


const istanceIndustrialClient = new IndustrialClient("Bunge", 123, 340, 666, 5, "77710-000");
const istanceCommercialClients = new ComercialClient("Labenu", 456, 120, "12345678910", 2, "77740-000");
const istanceResidencialClient = new ResidentialClient("Lugar Nenhum", 789, 100, "10245675312", 3, "0000-000");


const istanceClientManager = new ClientManager();
istanceClientManager.registerClient(istanceIndustrialClient);
istanceClientManager.registerClient(istanceCommercialClients);
istanceClientManager.registerClient(istanceResidencialClient);
istanceClientManager.registerClient(istanceIndustrialClient);

istanceClientManager.printClients();


//Exercicio 1
//a. todas, menos a função pois retorna um numero e nao há nenhum console para mostrar o resultado.

//Exercicio 2 
//a. Não é possível instanciar uma classe abstract
//b. Para conseguirmos criar uma instance dessa classe, devemos fazer uma outra classe filha que extende a classe Place.

//Exercicio 3
//1.Extender uma classe filha
//2. Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.
//3.Porque está representando um tipo de informação que simplesmente abstrai e armazena as características em comum de um conjunto de outras classes.

//Exercicio 4
//a. Métodos = getCpf, retorna o cpf do consumidor; calculateBill, retorna o valor a ser pago pelo consumo de energia.
// Propriedades =  name: registrationNumber, consumeEnergy,cpf , dwellersQuantity, cep 
// É necessario passar esses métodos e propriedades pois são dependendes da interface Client e da classe Residence.

//Exercicio 5
//a. A implementação do Client, já que ambas possuem nome, um identificador,  registro de consumo e a função de calcular gastos da energia em reais, e o cep vindo da classe pai.
//b. Numero de andares, cnpj e a função calculateBill (ambas tem a função, porém cada uma das classes receber descontos diferentes. ).

//Exercicio 6 
//a. Industry, porque ele depende das mesmas propriedades
//b. Client, pois possuiem informações em comum 
//c. Porque ela já herda as propriedades necessárias da classe pai e da interface Client

