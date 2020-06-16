import * as knex from "knex";
import * as dotenv from "dotenv";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
    port: Number(process.env.DB_PORT || "3306"),
    user: "hamilton_milene_taborda",
    password: "kCGZMKWqUFklXu%MLrwG" ,
    database: "hamilton_milene_taborda",
  },
});
