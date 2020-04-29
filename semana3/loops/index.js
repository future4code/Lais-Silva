//EX1
let sum = 0
for(let i = 0; i < 15; i++) {
    sum += i
}
console.log(sum)
// O programa soma, inicialmente, o valor 0 ao valor 1. O resultado é somado a 2. O próximo resultado é somado a 3, e assim por diante, até 14.
// O sum mostrado no console é 105.

//EX2
// O comando .push acrescenda um número ao final da array.
// 10, 15, 25, 30.
// Divisíveis por três: 12, 15, 18, 21, 27, 30. Divisíveis por 4: 12. 

//EX3 - ESCRITA DE CODIGO
//A. 
let arrayOriginal = [20, 60, 70, 90]
var maior = 0;
var menor = 100;
for (var i = 0; i < arrayOriginal.length; i++) {
if ( arrayOriginal[i] > maior ) {
maior = arrayOriginal[i];
}
}
for (var i = 0; i < arrayOriginal.length; i++) {
    if ( arrayOriginal[i] < menor ) {
    menor = arrayOriginal[i];
    }
    }

console.log ("O maior número é ", maior, "e o menor número é ", menor)

//B.
let arrayOriginal = [20, 60, 70, 90]
let segundaArray = []
for (var i = 0; i < arrayOriginal.length; i++) {
    let novoNum = arrayOriginal[i] / 10 
    segundaArray.push (novoNum)
}
console.log (segundaArray)

//C.
let arrayOriginal = [20, 60, 70, 90, 23]
let segundaArray = []
for (var i = 0; i < arrayOriginal.length; i++) {
    if ( arrayOriginal [i] % 2 === 0 ) {
        novoNum = arrayOriginal [i]
        segundaArray.push (novoNum)
    } 
}
console.log (segundaArray) 

//D. 
let arrayOriginal = [20, 60, 70, 90, 23]
for (var i = 0; i < arrayOriginal.length; i++) {
    console.log ("O valor do índex ", i, "é ", arrayOriginal[i])
} 

//DESAFIO - ESCRITA DE CODIGO
//4. 
let numeroPrincipal = prompt("Vamos jogar! Digite um numero:")
numeroPrincipal = Number(numeroPrincipal)
let chute = prompt("Tente adivinhar:")
chute = Number(chute) 
while ( numeroPrincipal !== chute ) {
        if ( numeroPrincipal > chute ) {
        console.log("Errou, é um numero maior!")
        chute = prompt("Tente de novo")
    } else if ( numeroPrincipal < chute) {
        console.log("Errou, é um numero menor!")
        chute = prompt("Tente de novo")
    }
} console.log("Acertou!") 


