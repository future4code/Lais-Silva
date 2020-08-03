"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
const checkAge = (birthday) => {
    return moment_1.default().diff(birthday, "years");
};
const checkCpf = (cpf) => {
    let data = JSON.parse(fs.readFileSync('./data.json').toString());
    for (let client of data) {
        if (client.cpf === cpf) {
            return true;
        }
        else {
            return false;
        }
    }
};
const checkName = (name) => {
    let data = JSON.parse(fs.readFileSync('./data.json').toString());
    for (let client of data) {
        if (client.name === name) {
            return true;
        }
        else {
            return false;
        }
    }
};
const createNewAccount = (name, cpf, birthday) => {
    try {
        let clientBirthday = birthday.format('DD/MM/YY');
        const age = checkAge(birthday);
        const repeatCPF = checkCpf(cpf);
        if (age < 18) {
            console.log("Voce ainda nao tem 18 anos.");
        }
        else {
            if (repeatCPF === true) {
                console.log("Esse CPF já esta cadastrado.");
            }
            else {
                let newAccount = {
                    name,
                    cpf,
                    birthday: clientBirthday,
                    balance: 0
                };
                let data = JSON.parse(fs.readFileSync('./data.json').toString());
                data.push(newAccount);
                const accounts = JSON.stringify(data);
                fs.writeFileSync('./data.json', accounts);
            }
            ;
        }
        ;
    }
    catch (error) {
        console.log("Erro ao criar conta: ", error);
    }
};
// createNewAccount(process.argv[2], Number(process.argv[3]), moment(process.argv[4], 'DD/MM/YY'));
const getBallance = (name, cpf) => {
    const extistentCpf = checkCpf(cpf);
    const extistentName = checkName(name);
    const data = JSON.parse(fs.readFileSync('./data.json').toString());
    if (extistentCpf === true && extistentName === true) {
        for (let account of data) {
            if (account.cpf === cpf) {
                console.log("Seu saldo é: ", account.balance);
                return;
            }
        }
    }
    else {
        console.log("Conta não existe.");
    }
};
// getBallance(process.argv[2], Number(process.argv[3]));
const addCash = (name, cpf, value) => {
    const extistentCpf = checkCpf(cpf);
    const extistentName = checkName(name);
    const data = JSON.parse(fs.readFileSync('./data.json').toString());
    if (extistentCpf === true && extistentName === true) {
        for (let account of data) {
            if (account.cpf === cpf) {
                account.balance = account.balance + value;
                console.log("Seu novo saldo é: ", account.balance);
                return;
            }
        }
    }
    else {
        console.log("Conta não existe.");
    }
    ;
};
addCash(process.argv[2], Number(process.argv[3]), Number(process.argv[4]));
