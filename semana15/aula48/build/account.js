"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.Transaction = void 0;
class Transaction {
    // private date: string 
    constructor(value, description) {
        this.value = value;
        this.description = description;
        // this.date = format(Date.now, 'DD/MM/YY')
    }
}
exports.Transaction = Transaction;
class Account {
    constructor(newName, newAge) {
        this.balance = 0;
        this.extract = [];
        this.name = newName;
        this.age = newAge;
    }
    getBalance() {
        return this.balance;
    }
    getExtract() {
        return this.extract;
    }
    addCash(value, description) {
        this.balance = this.balance + value;
        const newTransaction = {
            value: value,
            description: description,
        };
        this.extract.push(newTransaction);
        console.log("Seu novo saldo é: ", this.balance);
    }
}
exports.Account = Account;
;
