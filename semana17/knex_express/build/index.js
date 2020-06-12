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
const knex = require("knex");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
app.use(express.json());
dotenv.config();
const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
    },
});
const getActorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
  `);
    return result[0][0];
});
const searchActor = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `);
    return console.log(result);
});
const countActors = (gender) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection.select("*").count("sex").from("Actor").where({ sex: gender });
    console.log(result);
});
countActors("male");
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=index.js.map