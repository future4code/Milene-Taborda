"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidentialClient = void 0;
const Residence_1 = require("./Residence");
class ResidentialClient extends Residence_1.Residence {
    constructor(name, registrationNumber, consumeEnergy, cpf, dwellersQuantity, cep) {
        super(dwellersQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumeEnergy = consumeEnergy;
        this.cpf = cpf;
    }
    ;
    getCpf() {
        return this.cpf;
    }
    ;
    calculateBill() {
        return this.consumeEnergy * 0.75;
    }
    ;
}
exports.ResidentialClient = ResidentialClient;
//# sourceMappingURL=ResidentialClient.js.map