import { User } from "./User";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { Seller } from "./Seller";
import { SaltyDish } from "./partIV-abstract/saltydish";

const  istanceUser = new User("1",  "Milene", "milenetaborda1@outlook.com", "123456");
//console.log(istanceUser);

const istanceCustomer = new Customer("1",  "Milene", "milenetaborda1@outlook.com", "123456", "deb");
//console.log(istanceCustomer);

console.log("Id: ", istanceUser.getId());
console.log("Name: ", istanceUser.getName());
console.log("Email: ", istanceUser.getEmail());
console.log("Valor da compra: ", istanceCustomer.purchaseTotal);
console.log("Cartão de crédito: ", istanceCustomer.getCreditCard());

console.log(istanceCustomer.introduceYourself());

const istanceEmployee = new Employee("1",  "Milene", "milenetaborda1@outlook.com", "123456", new Date(), 200);
const istanceSeller = new Seller("1",  "Milene", "milenetaborda1@outlook.com", "123456", new Date(), 200);

console.log(istanceEmployee.getId());
console.log(istanceEmployee.getName());
console.log(istanceEmployee.getEmail());
console.log(istanceEmployee.introduceYourself());
console.log(istanceEmployee.getBaseSalary());
console.log(istanceEmployee.getAdmissionDate());
console.log(istanceEmployee.getCalculateTotalSalary())


istanceSeller.setSalesQuantity(2);
console.log(istanceSeller.getSalesQuantity());

console.log(istanceSeller.calculateTotalSalary());


/***********************************************************/
//Exercicio 1
// a - nao
// b - 1

//Exercicio 2
//a. 1
//b. 2, porque a classe Customer extende a User

//Exercicio 3
//a. não, pois como ela é private, apenas a classe User pode ter acesso a ela.

//Exercicio 6
//a. 3
//b. Todos, menos o password.

//Exercicio 08
//a. Os mesmos parâmetros do classe pai do Seller (Employee), pois a mesma herda o constructor do pai.
//b. Todos, menos o password,  pois como ela é private, apenas a classe User pode ter acesso a ela.

//Exercicio 9
//a. Não, pois ela é private.

//Exercicio 10
//a. O valor do salário, já com a comissão, 

