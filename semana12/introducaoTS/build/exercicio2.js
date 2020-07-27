"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = require("prop-types");
function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
console.log(obterEstatisticas([1, 2, 3, 4]));
const amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros) => prop_types_1.number
};
console.log(amostraDeIdades);
//# sourceMappingURL=exercicio2.js.map