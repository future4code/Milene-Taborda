"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const moment = require("moment");
moment.locale('pt-br');
const fileEvent = "allEvents.json";
const events = require("../allEvents.json");
const date = moment();
const getEvents = () => {
    try {
        console.log(events);
    }
    catch (_a) {
        console.log("Erro inesperado. Tente novamente!");
    }
};
const createEvent = () => {
    try {
        const newDate = moment(process.argv[4], 'DD/MM/YYYY');
        const teste = newDate.format('L LTS');
        const createNewEvent = {
            name: process.argv[2],
            description: process.argv[3],
            date: teste,
            start: process.argv[5],
            end: process.argv[6]
        };
        const today = date.unix();
        const differentDate = newDate.unix();
        const result = differentDate - today;
        if (createNewEvent.name && createNewEvent.description && createNewEvent.date && createNewEvent.start && createNewEvent.end && result > 0) {
            events.push(createNewEvent);
            fs.writeFileSync(fileEvent, JSON.stringify(events));
        }
        else {
            console.log("Erro ao criar evento. Todos os campos são obrigatorios!");
        }
    }
    catch (_a) {
        console.log("Erro inesperado. Tente novamente!");
    }
};
createEvent();
//# sourceMappingURL=index.js.map