import * as fs from 'fs';

const name: string = process.argv[2]
const age: number = Number(process.argv[3])

if (name && age) {
    console.log(`Olá, ${name}! Você tem ${age} anos.`)
    console.log(`Em 7 anos você terá ${age + 7} anos`)
} else {
    console.log("Pedi dois parametros e você só passou um/nenhum")
};