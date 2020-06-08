"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Residence_1 = require("./Residence");
const Commerce_1 = require("./Commerce");
const Industry_1 = require("./Industry");
const ClientManager_1 = require("./ClientManager");
const IndustrialClient_1 = require("./IndustrialClient");
const CommercialClient_1 = require("./CommercialClient");
const ResidentialClient_1 = require("./ResidentialClient");
const client = {
    name: "Milene Taborda",
    registrationNumber: 123,
    consumeEnergy: 33,
    calculateBill: () => {
        return 2;
    }
};
console.log(client);
const istanceResidence = new Residence_1.Residence(2, "77710-000");
const istanceCommerce = new Commerce_1.Commerce(5, "86460-000");
const istanceIndustry = new Industry_1.Industry(10, "78370-000");
istanceResidence.getCep();
istanceCommerce.getCep();
istanceIndustry.getCep();
const istanceIndustrialClient = new IndustrialClient_1.IndustrialClient("Bunge", 123, 340, 666, 5, "77710-000");
const istanceCommercialClients = new CommercialClient_1.ComercialClient("Labenu", 456, 120, "12345678910", 2, "77740-000");
const istanceResidencialClient = new ResidentialClient_1.ResidentialClient("Lugar Nenhum", 789, 100, "10245675312", 3, "0000-000");
const istanceClientManager = new ClientManager_1.ClientManager();
istanceClientManager.registerClient(istanceIndustrialClient);
istanceClientManager.registerClient(istanceCommercialClients);
istanceClientManager.registerClient(istanceResidencialClient);
istanceClientManager.registerClient(istanceIndustrialClient);
istanceClientManager.printClients();
//# sourceMappingURL=index.js.map