import * as knex from "knex";
import * as dotenv from "dotenv";
import * as express from 'express';
import { AddressInfo } from "net";

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

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
  `);
  return result[0][0];
};

const searchActor = async (name: string): Promise<any>  =>{
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `);
  return console.log( result);
};

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.select("*").from("Actor").where({sex: gender});
  const count = result[0][0].count;
  return count;
}

//searchActor("Tony Ramos");
countActors("male");

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

