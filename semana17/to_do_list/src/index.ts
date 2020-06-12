import * as express from  'express';
import { AddressInfo } from "net";

import {createNewUser, getUserById, editInfoUser, getAllUsers} from './services/User';
import { createTask, getTaskById } from './services/Task';

const app = express();
app.use(express.json());

app.put("/user", async (req, res) => {
  try {
    const { name, nickname, email} = req.body;

    await createNewUser(name, nickname, email);
    res.status(200).send({ message: "Sucesso" });

  } catch(err) {
    res.status(400).send({
      message: err.mysqlMessage || err.message
    })
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const detailsUserById = await getUserById(id);

    return res.json(detailsUserById);

  }catch(err) {
    res.status(400).send({
      message: err.mysqlMessage || err.message
    })
  }
});

app.get("/user/all", async (req, res) => {
  try {
   const result = await getAllUsers();
   return res.send({message: "Informações atualizadas com sucesso!"});
    
  }catch(err) {
    res.status(400).send({
      message: err.mysqlMessage || err.message
    })
  }
})

app.put("/user/edit/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const {name, nickname} = req.body;
  
    await editInfoUser(id, name, nickname);
  
    return res.send({message: "Informações atualizadas com sucesso!"});
  } catch(err) {
    res.status(400).send({
      message: err.mysqlMessage || err.message
    })
  }
})

app.put("/task", async (req, res) => {
  try { 
    const {id, title, description, limitDate, creatorUserId } = req.body;
    
    await createTask(id, title, description, limitDate,  creatorUserId);
    res.status(200).send({ message: "Tarefa criada com sucesso" });

  }  catch(err) {
    res.status(400).send({
      message: err.mysqlMessage || err.message
    })
  }
})

app.get("/task/:id", async (req, res) => {
  const { id } = req.params;
  const result = await getTaskById(id);

  return res.json(result);
})








const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});