import { Client } from "./Client";

export class ClientManager  {
  private clients: Client[] = [];

  getClientsQuantity(): number {
    return this.clients.length
  }

  registerClient(newClient: Client): void {
    const checkRegistrationNumber = this.clients.find((client) => {
      return   client.registrationNumber === newClient.registrationNumber
    });

    if(checkRegistrationNumber) {
      console.log("Numero de registro já cadastrado!")
    } else {
      this.clients.push(newClient);
      console.log("Deu")
    }
  }

  calculateBillOfClient(registrationNumber: number ): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber;
    });

    if(foundClient) {
      return foundClient.calculateBill();
    }
    return 0
  };

  calculateTotalIncome(): number {
    let total: number =  0;
    this.clients.forEach((client) => {
      total += client.calculateBill();
    });
    return total
  }

  deleteUser(registrationNumber: number): void {
    let registrationIndex = undefined;

    for(const client of this.clients){
      if(client.registrationNumber === registrationNumber) {
        registrationIndex = client.registrationNumber;
      }
    }

    if(registrationIndex !== undefined) {
      this.clients.splice(registrationIndex, 1);
    }
  }

  printClients(): any {
   return this.clients.map((client) => {
       console.log( `${client.name} - ${client.registrationNumber} - ${client.consumeEnergy}  - ${client.calculateBill()}` )
    });
  };
}