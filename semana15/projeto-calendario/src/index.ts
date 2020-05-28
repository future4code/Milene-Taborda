import * as fs from 'fs';
import * as moment from 'moment';
moment.locale('pt-br');

const fileEvent: string = "allEvents.json";
const events = require("../allEvents.json");
const date = moment();

type event = {
  name: string,
  description: string,
  date: string,
  start: string,
  end: string
};

const getEvents = () => {
 try {
  console.log(events);

 } catch {
  console.log("Erro inesperado. Tente novamente!");
 }
}

const createEvent = () => {
  try {
    const newDate = moment(process.argv[4], 'DD/MM/YYYY');
    const teste = newDate.format('L LTS')

    const createNewEvent: event = {
      name: process.argv[2],
      description: process.argv[3],
      date: teste,
      start: process.argv[5], 
      end: process.argv[6]
    }

    const today = date.unix();
    const differentDate = newDate.unix();
    const result = differentDate - today

    if (createNewEvent.name && createNewEvent.description && createNewEvent.date && createNewEvent.start && createNewEvent.end) {
      if( result > 0) {
        console.log("O evento não pode ser criado com uma data anterior a de hoje!")
      } else {
      events.push(createNewEvent);
      fs.writeFileSync(fileEvent, JSON.stringify(events));
      console.log("Evento criado com sucesso!");
      }
    } else {
      console.log("Erro ao criar evento. Todos os campos são obrigatorios!")
    }
  } catch {
    console.log("Erro inesperado. Tente novamente!");
  }
}

createEvent();
//getEvents();
