"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustrialClient = void 0;
const Industry_1 = require("./Industry");
class IndustrialClient extends Industry_1.Industry {
    constructor(name, registrationNumber, consumeEnergy, insdustryNumber, machinesQuantity, cep) {
        super(machinesQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumeEnergy = consumeEnergy;
        this.insdustryNumber = insdustryNumber;
    }
    ;
    getIndustryNumber() {
        return this.insdustryNumber;
    }
    ;
    calculateBill() {
        return this.consumeEnergy * 0.45 + this.machinesQuantity * 100;
    }
    ;
}
exports.IndustrialClient = IndustrialClient;
//# sourceMappingURL=IndustrialClient.js.map