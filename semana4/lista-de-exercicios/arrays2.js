//EXERCICIO 2 - FUNÇÕES DE ARRAY 

const minhaArray = [1, 2, 3, 4, 5, 6]
let multiplica2 = []

let multiplica = (minhaArray) => {
    for (let numero of minhaArray) {   
        let numeroMultiplicado = numero * 2               
        multiplica2.push(numeroMultiplicado)
    }
    console.log(multiplica2)
}
console.log(multiplica(minhaArray))


const minhaArray2 = [1, 2, 3, 4]
let multiplica3 = []

let multiplicaString = (minhaArray2) => {
    for (let numeros of minhaArray2) {
        let multiplicaString3 = numeros * 3
        multiplicaString3 = String(multiplicaString3)
        multiplica3.push(multiplicaString3)
    }
    console.log (multiplica3)
}
console.log(multiplicaString(minhaArray2))


const minhaArray3 = [1, 2, 3, 4]
let paridade = []

let botaTexto = (minhaArray3) => {
    for (let numero of minhaArray3) {
        if (numero % 2 === 0) {
            paridade.push(`O ${numero} é par`)
        } else {
            paridade.push(`O ${numero} é ímpar`) 
        }
    }
    console.log (paridade)
}
console.log(botaTexto(minhaArray3))
