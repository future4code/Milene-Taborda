const fs = require('fs');
const novaTarefa = process.argv[2];
const listaTarefas = "tarefas.txt";

try {
  fs.appendFileSync(listaTarefas, novaTarefa, 'utf8');
  console.log("Tarefa Criada com sucesso")
} catch (error) {
  console.error(error)
}