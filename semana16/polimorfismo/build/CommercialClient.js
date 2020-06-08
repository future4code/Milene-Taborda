"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComercialClient = void 0;
const Commerce_1 = require("./Commerce");
class ComercialClient extends Commerce_1.Commerce {
    constructor(name, registrationNumber, consumeEnergy, cnpj, floorsQuantity, cep) {
        super(floorsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumeEnergy = consumeEnergy;
        this.cnpj = cnpj;
    }
    ;
    calculateBill() {
        return this.consumeEnergy * 0.53;
    }
    ;
    getCnpj() {
        return this.cnpj;
    }
    ;
}
exports.ComercialClient = ComercialClient;
//# sourceMappingURL=CommercialClient.js.map