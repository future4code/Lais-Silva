import * as fs from 'fs';
const chalk = require('chalk');

const fileData: string = fs.readFileSync('./tasks.txt').toString();
let tasks;

const newTask: string = process.argv[2] 

if (newTask) {
    try {
        fs.appendFileSync("./tasks.txt", newTask)
        console.log(tasks)
    } catch {
        console.log("Não foi possivel acessar sua tarefa")
    };
    console.log()
} else {
    console.log(chalk.red("Digite uma tarefa"))
};
