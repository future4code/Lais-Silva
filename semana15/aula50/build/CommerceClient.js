"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommercialClient = void 0;
const Commerce_1 = require("./Commerce");
class CommercialClient extends Commerce_1.Commerce {
    constructor(name, consumedEnergy, cnpj, cep, floorsQuantity) {
        super(floorsQuantity, cep);
        this.name = name;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
        this.registrationNumber = Math.random();
    }
    getCnpj() {
        return this.cnpj;
    }
    calculateBill() {
        return this.consumedEnergy * 0.53;
    }
}
exports.CommercialClient = CommercialClient;
