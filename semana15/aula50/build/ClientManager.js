"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientManager = void 0;
class ClientManager {
    constructor() {
        this.clients = [];
    }
    getClients() {
        return this.clients.length;
    }
    addClient(newClient) {
        this.clients.push(newClient);
    }
    calculateBillOfClient(registrationNumber) {
        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber;
        });
        if (foundClient) {
            // verificando se o usuário existe
            return foundClient.calculateBill();
        }
        return 0;
    }
    getAllPayments() {
        let sum = 0;
        this.clients.forEach((client) => {
            sum = sum + client.calculateBill();
        });
        return sum;
    }
    deletClient(registrationNumber) {
        const newClientsList = this.clients.filter((client) => {
            return client.registrationNumber !== registrationNumber;
        });
        return newClientsList;
    }
    printClients() {
        this.clients.forEach((client) => {
            console.log("NOME DO CLIENTE: ", (client.name).toUpperCase(), "-", "NUMERO DE REGISTRO: ", client.registrationNumber, "-", "ENERGIA CONSUMIDA: ", client.consumedEnergy, "-", "CONTA TOTAL: ", client.calculateBill());
        });
    }
}
exports.ClientManager = ClientManager;
