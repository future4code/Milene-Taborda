"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaltyDish = void 0;
const dish_1 = require("./dish");
class SaltyDish extends dish_1.Dish {
    constructor(price, cost, ingredients, timeToCook) {
        super(price, cost, ingredients, timeToCook);
    }
    cook() {
        console.log("Starting Salty Dish");
    }
}
exports.SaltyDish = SaltyDish;
const feijoada = new SaltyDish(100, 20, ["leite condensado"], 100);
console.log(feijoada.getProfit());
//# sourceMappingURL=saltydish.js.map