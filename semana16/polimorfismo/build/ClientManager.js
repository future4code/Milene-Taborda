"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientManager = void 0;
class ClientManager {
    constructor() {
        this.clients = [];
    }
    getClientsQuantity() {
        return this.clients.length;
    }
    registerClient(newClient) {
        const checkRegistrationNumber = this.clients.find((client) => {
            return client.registrationNumber === newClient.registrationNumber;
        });
        if (checkRegistrationNumber) {
            console.log("Numero de registro já cadastrado!");
        }
        else {
            this.clients.push(newClient);
            console.log("Deu");
        }
    }
    calculateBillOfClient(registrationNumber) {
        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber;
        });
        if (foundClient) {
            return foundClient.calculateBill();
        }
        return 0;
    }
    ;
    calculateTotalIncome() {
        let total = 0;
        this.clients.forEach((client) => {
            total += client.calculateBill();
        });
        return total;
    }
    deleteUser(registrationNumber) {
        let registrationIndex = undefined;
        for (const client of this.clients) {
            if (client.registrationNumber === registrationNumber) {
                registrationIndex = client.registrationNumber;
            }
        }
        if (registrationIndex !== undefined) {
            this.clients.splice(registrationIndex, 1);
        }
    }
    printClients() {
        return this.clients.map((client) => {
            console.log(`${client.name} - ${client.registrationNumber} - ${client.consumeEnergy}  - ${client.calculateBill()}`);
        });
    }
    ;
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=ClientManager.js.map