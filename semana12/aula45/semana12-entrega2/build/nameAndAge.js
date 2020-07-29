"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = process.argv[2];
const age = Number(process.argv[3]);
if (name && age) {
    console.log(`Olá, ${name}! Você tem ${age} anos.`);
    console.log(`Em 7 anos você terá ${age + 7} anos`);
}
else {
    console.log("Voce nao passou um nome");
}
//# sourceMappingURL=nameAndAge.js.map