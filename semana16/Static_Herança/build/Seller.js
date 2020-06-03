"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const Employee_1 = require("./Employee");
let Seller = (() => {
    class Seller extends Employee_1.Employee {
        constructor() {
            super(...arguments);
            this.salesQuantity = 0;
        }
        getSalesQuantity() {
            return this.salesQuantity;
        }
        setSalesQuantity(num) {
            this.salesQuantity = num;
        }
        calculateTotalSalary() {
            return super.getCalculateTotalSalary() + Seller.SELLING_COMMISSION * this.salesQuantity;
        }
    }
    Seller.SELLING_COMMISSION = 5;
    return Seller;
})();
exports.Seller = Seller;
;
//# sourceMappingURL=Seller.js.map