"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fileData = fs.readFileSync("./tasks.txt").toString();
let tasks;
console.log(fileData);
let newTask = process.argv[2];
try {
    fs.appendFileSync("./tasks.txt", newTask);
    console.log("./tasks.txt");
}
catch (error) {
    console.log("Erro ao atualizar os dados");
}
//# sourceMappingURL=setTasks.js.map