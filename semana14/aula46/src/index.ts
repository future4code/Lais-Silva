import moment from 'moment';
moment.locale('pt-br');

type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
};

export let events: event[] = [
    {
        name: 'Formatura Mello',
        description: 'vou ser web fullstack',
        startAt: moment('01/10/2020 17:00', 'DD/MM/YYYY HH:mm'),
        finishAt: moment('01/10/2020 19:00', 'DD/MM/YYYY HH:mm')
    },
    {
        name: 'Inicio no novo emprego',
        description: 'dev na dti',
        startAt: moment('05/10/2020 08:00', 'DD/MM/YYYY hh:mm'),
        finishAt: moment('05/10/2020 17:00', 'DD/MM/YYYY HH:mm')
    }
];

const printEvents = (events: event[]): void => {
    const newEvent = {
        name: process.argv[2],
        description: process.argv[3],
        startAt: moment(process.argv[4], "DD/MM/YYYY, HH:mm"),
        finishAt: moment(process.argv[4], "DD/MM/YYYY, HH:mm"),
    }
    if (!newEvent.name || !newEvent.description || !newEvent.startAt || !newEvent.finishAt) {
        console.log("Input invalido");
        return;
    }
    const diffStartAndToday = newEvent.startAt.diff(moment(), 'days');
    const diffFisishAndToday = newEvent.finishAt.diff(moment(), 'days');
    if (diffStartAndToday < 0 || diffFisishAndToday < 0) {
        console.log("Data inválida.")
    }
    events.push(newEvent)

    events.map(event => {
        const diff: number = event.finishAt.diff(event.startAt, "minutes");
        const today: moment.Moment = moment();
        const diffToday: number = event.startAt.diff(today, 'days');

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
printEvents(events);
