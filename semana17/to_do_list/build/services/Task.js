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
exports.getTaskById = exports.createTask = void 0;
const connection_1 = require("../connection");
exports.createTask = (id, title, description, limitDate, creatorUserId) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.connection.raw(`
    INSERT INTO TodoListTask(id ,title ,description , limit_date, creator_user_id)
    VALUE ("${id}", "${title}", "${description}", "${limitDate}", "${creatorUserId}");
  `);
});
exports.getTaskById = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.connection.raw(`
    SELECT * FROM TodoListTask
    WHERE id = "${taskId}"
  `);
    return result[0][0];
});
//# sourceMappingURL=Task.js.map