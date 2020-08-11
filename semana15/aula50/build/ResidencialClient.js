"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidencialClient = void 0;
const Residence_1 = require("./Residence");
class ResidencialClient extends Residence_1.Residence {
    constructor(name, registrationNumber, consumedEnergy, cpf, residentsQuantity, cep) {
        super(residentsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
    calculateBill() {
        return this.consumedEnergy * 0.75;
    }
}
exports.ResidencialClient = ResidencialClient;
