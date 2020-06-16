"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const knex = require("knex");
const dotenv = require("dotenv");
dotenv.config();
exports.connection = knex({
    client: "mysql",
    connection: {
        host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
        port: Number(process.env.DB_PORT || "3306"),
        user: "hamilton_milene_taborda",
        password: "kCGZMKWqUFklXu%MLrwG",
        database: "hamilton_milene_taborda",
    },
});
//# sourceMappingURL=connection.js.map