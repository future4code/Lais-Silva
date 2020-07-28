import * as fs from 'fs';

const fileData: string = fs.readFileSync("./tasks.txt").toString()

let tasks;

let newTask: string = process.argv[2]

try {
    fs.appendFileSync("./tasks.txt", newTask)
    console.log("./tasks.txt")
} catch (error) {
    console.log("Erro ao atualizar os dados")
};