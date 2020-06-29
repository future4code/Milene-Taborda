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
exports.getAllUsers = void 0;
const express = require("express");
const connection_1 = require("./connection");
const User_1 = require("./services/User");
const Task_1 = require("./services/Task");
const app = express();
app.use(express.json());
app.put("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, nickname, email } = req.body;
        yield User_1.createNewUser(name, nickname, email);
        res.status(200).send({ message: "Sucesso" });
    }
    catch (err) {
        res.status(400).send({
            message: err.mysqlMessage || err.message
        });
    }
}));
app.get("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const detailsUserById = yield User_1.getUserById(id);
        return res.json(detailsUserById);
    }
    catch (err) {
        res.status(400).send({
            message: err.mysqlMessage || err.message
        });
    }
}));
exports.getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.connection.raw(`
    SELECT * FROM TodoListUser ;
  `);
    return result[0][0];
});
app.get("/user/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield exports.getAllUsers();
        return res.send({ message: "Informações atualizadas com sucesso!" });
    }
    catch (err) {
        res.status(400).send({
            message: err.mysqlMessage || err.message
        });
    }
}));
app.put("/user/edit/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, nickname } = req.body;
        yield User_1.editInfoUser(id, name, nickname);
        return res.send({ message: "Informações atualizadas com sucesso!" });
    }
    catch (err) {
        res.status(400).send({
            message: err.mysqlMessage || err.message
        });
    }
}));
app.put("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, title, description, limitDate, creatorUserId } = req.body;
        yield Task_1.createTask(id, title, description, limitDate, creatorUserId);
        res.status(200).send({ message: "Tarefa criada com sucesso" });
    }
    catch (err) {
        res.status(400).send({
            message: err.mysqlMessage || err.message
        });
    }
}));
app.get("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Task_1.getTaskById(id);
    return res.json(result);
}));
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=index.js.map