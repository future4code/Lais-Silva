"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = void 0;
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('pt-br');
exports.events = [
    {
        name: 'Formatura Mello',
        description: 'vou ser web fullstack',
        startAt: moment_1.default('01/10/2020 17:00', 'DD/MM/YYYY HH:mm'),
        finishAt: moment_1.default('01/10/2020 19:00', 'DD/MM/YYYY HH:mm')
    },
    {
        name: 'Inicio no novo emprego',
        description: 'dev na dti',
        startAt: moment_1.default('05/10/2020 08:00', 'DD/MM/YYYY hh:mm'),
        finishAt: moment_1.default('05/10/2020 17:00', 'DD/MM/YYYY HH:mm')
    }
];
const printEvents = (events) => {
    const newEvent = {
        name: process.argv[2],
        description: process.argv[3],
        startAt: moment_1.default(process.argv[4], "DD/MM/YYYY, HH:mm"),
        finishAt: moment_1.default(process.argv[4], "DD/MM/YYYY, HH:mm"),
    };
    if (!newEvent.name || !newEvent.description || !newEvent.startAt || !newEvent.finishAt) {
        console.log("Input invalido");
        return;
    }
    const diffStartAndToday = newEvent.startAt.diff(moment_1.default(), 'days');
    const diffFisishAndToday = newEvent.finishAt.diff(moment_1.default(), 'days');
    if (diffStartAndToday < 0 || diffFisishAndToday < 0) {
        console.log("Data inválida.");
    }
    events.push(newEvent);
    events.map(event => {
        const diff = event.finishAt.diff(event.startAt, "minutes");
        const today = moment_1.default();
        const diffToday = event.startAt.diff(today, 'days');
        // console.log(`
        //     Nome:  ${event.name}
        //     Descrição: ${event.description}
        //     Inicio: ${event.startAt.format('dddd, DD [de] MMMM [de] YYYY, HH:mm')} 
        //     Fim:  ${event.finishAt.format('DD [de] MMMM [de] YYYY, HH:mm')} 
        //     Duração:  ${diff} minutos 
        //     Dias até o evento: ${diffToday}
        // `)
    });
};
printEvents(exports.events);
//# sourceMappingURL=index.js.map