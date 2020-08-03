"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const JSONManager_1 = require("./JSONManager");
class Bank {
    constructor(accounts, fileManager) {
        this.accounts = accounts;
        this.fileManager = fileManager;
    }
    createAccount(userAccount) {
        this.accounts.push(userAccount);
        fileManager.writeToDataBase(this.accounts);
        console.log("Conta criada.");
    }
    getAllAccounts() {
        const fileManager = new JSONManager_1.JSONManager('./accounts.json');
        const accountsList = fileManager.readDataBase();
        return accountsList;
    }
    getAccountByCpfAndName(cpf, name) {
        const fileManager = new JSONManager_1.JSONManager('./accounts.json');
        const accountsList = fileManager.readDataBase();
        for (let client of accountsList) {
            if (cpf === client.cpf || name === client.name) {
                return client;
            }
        }
    }
}
exports.Bank = Bank;
;
const fileManager = new JSONManager_1.JSONManager('./accounts.json');
