"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Industry_1 = require("./Industry");
class IndustrialClinet extends Industry_1.Industry {
    constructor(name, registrationNumber, consumedEnergy, insdustryNumber, // tanto faz ser string ou number
    machinesQuantity, cep) {
        super(machinesQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.insdustryNumber = insdustryNumber;
    }
    getIndustryNumber() {
        return this.insdustryNumber;
    }
    calculateBill() {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}
