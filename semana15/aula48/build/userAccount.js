"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
// 1. O construtor serve para auxiliar a criação de
// novas instâncias da classe onde é usado. É possível 
// tornar alguns dados inicialmente fixos. 
// 2. O console.log do constructor apareceu uma única vez. 
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        // console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getBalance() {
        // console.log("Seu saldo é R$ ", this.balance)
        return this.balance;
    }
    addBalance(value) {
        // this.balance = this.balance + value
        // console.log('Saldo atualizado com sucesso. Novo saldo: R$ ', this.balance)
    }
    getTransactions() {
        console.log(this.transactions);
        return this.transactions;
    }
}
exports.UserAccount = UserAccount;
;
const newName = process.argv[2];
const newCPF = process.argv[3];
const newAge = Number(process.argv[4]);
const newUserAccont = new UserAccount(newName, newCPF, newAge);
// 3. Para acessar informações privadas usamos os métodos getter
// presentes/declaradas na classe.
// 4.
// console.log(newUserAccont.getBalance())
