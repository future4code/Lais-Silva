import moment from 'moment';
import { events } from './index'

const showSpecificEvent = (events: any[]): void => {
    const specificEventMoment: moment.Moment = moment(process.argv[2]);
    events.filter((event) => {
        if (specificEventMoment === moment(event.startAt)) {
            console.log(event)
        }
        else {
            return undefined
        }
    })
}
console.log(showSpecificEvent(events))


