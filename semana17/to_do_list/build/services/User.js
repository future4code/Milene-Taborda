"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.editInfoUser = exports.getUserById = exports.createNewUser = void 0;
const connection_1 = require("../connection");
exports.createNewUser = (name, nickname, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.connection.raw(`
     INSERT INTO TodoListUser
     VALUES(
       "${Date.now()}",
       "${name}",
       "${nickname}",
       "${email}"
     );
 `);
});
exports.getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.connection.raw(`
   SELECT * FROM TodoListUser
   WHERE id = "${userId}"
 `);
    return result[0][0];
});
exports.editInfoUser = (id, name, nickname) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.connection.raw(`
   UPDATE TodoListUser
   SET name = "${name}", nickname = "${nickname}"
   WHERE id = "${id}"
 `);
    return result[0];
});
exports.getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.connection.raw(`
    SELECT * FROM TodoListUser ;
  `);
    return result[0][0];
});
//# sourceMappingURL=User.js.map