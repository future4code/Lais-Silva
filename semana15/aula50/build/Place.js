"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
class Place {
    constructor(cep) {
        this.cep = cep;
    }
    getCep() {
        return this.cep;
    }
}
exports.Place = Place;
// não é possível criar instâncias 
// armazena e abstrai dados comuns 
// Place é uma classe porque precisa ter um 
// acesso restrito a um dos seus atributos, 
// o que é impossível de se fazer em interfaces.
