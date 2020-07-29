const chalk = require('chalk');

const operation: string = process.argv[3];
const firtsNumber: number = Number(process.argv[3]);
const secondNumber: number = Number(process.argv[4]);

switch (operation) {
    case "sum":
        console.log("Resultado:", firtsNumber + secondNumber)
        break;
    case "sub":
        console.log("Resultado:", firtsNumber - secondNumber)
        break;
    case "mult":
        console.log("Resultado:", firtsNumber * secondNumber)
        break;
    case "div":
        console.log("Resultado:", firtsNumber / secondNumber)
        break;
    default:
        console.log(chalk.pink("Você nao passou os parametros esperados"))
}

