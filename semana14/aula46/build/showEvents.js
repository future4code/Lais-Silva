"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const index_1 = require("./index");
const showSpecificEvent = (events) => {
    const specificEventMoment = moment_1.default(process.argv[2]);
    events.filter((event) => {
        if (specificEventMoment === moment_1.default(event.startAt)) {
            console.log(event);
        }
        else {
            return undefined;
        }
    });
};
console.log(showSpecificEvent(index_1.events));
//# sourceMappingURL=showEvents.js.map