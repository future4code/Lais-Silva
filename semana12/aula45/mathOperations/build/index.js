"use strict";
const operation = process.argv[3];
const firtsNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);
switch (operation) {
    case "sum":
        console.log("Resultado:", firtsNumber + secondNumber);
        break;
    case "sub":
        console.log("Resultado:", firtsNumber - secondNumber);
        break;
    case "mult":
        console.log("Resultado:", firtsNumber * secondNumber);
        break;
    case "div":
        console.log("Resultado:", firtsNumber / secondNumber);
        break;
    default:
        console.log("Você nao passou os parametros esperados");
}
//# sourceMappingURL=index.js.map