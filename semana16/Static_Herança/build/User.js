"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.name = name,
            this.email = email,
            this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    introduceYourself() {
        return `Olá, sou ${this.name}. Bom dia!`;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map