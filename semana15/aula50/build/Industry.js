"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Industry = void 0;
const Place_1 = require("./Place");
class Industry extends Place_1.Place {
    constructor(machinesQuantity, cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }
    getMachinesQuantity() {
        return this.machinesQuantity;
    }
}
exports.Industry = Industry;
