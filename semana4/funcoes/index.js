//EXERCICIO1
//console.log(minhaFuncao(2)) - imprime []
//console.log(minhaFuncao(5)) - imprime [0, 1, 0, 1, 2, 3]
//console.log(minhaFuncao(8)) - imprime [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

//EXERCICIO2
let arrayDeNomes = [1, 2, 3, 4];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
}
//A.
//console.log(funcao(arrayDeNomes, "Darvas")); imprime a posição de "Darvas" = 0
//console.log(funcao(arrayDeNomes, "João")); imprime  a posição de "João" = 2
//console.log(funcao(arrayDeNomes, "Paula")); imprime undefined porque não existe Paula na arrayDeNomes

//B.
//console.log(funcao(arrayDeNomes, 4)) - funciona; a função mostra em qual a posição esta o número apresentado como "nome".

//EXERCICIO3
function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x; //soma os elementos da array
      resultadoB *= x; //multiplica todos os elementos
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
    }
// Poderia ser nomeada somaProduto, pois calcula o resultado da soma entre os
// numbers da array assim como o produto da multiplicação dos valores. 

//EXERCICIO4 - ESCRITA DE CODIGO
//A.
function conversorIdade(idadeHumana) {
    let idadeAnimal = idadeHumana * 7
    return idadeAnimal
}
console.log(conversorIdade(30))

//B.
function frase(a, b, c, d) {
    if (d == true) {
        return "Meu nome é " + a + " tenho " + b + " anos, moro em " + c + " e sou estudante"
    } else {
        return  "Meu nome é " + a + " tenho " + b + " anos, moro em " + c + " e não sou estudante"
    }
}
console.log(frase("Lais", 19, "Belo Horizonte"))

//EXERCICIO5
function seculo(n) {
    if (n > 1000 && n < 1100) {
    return 'Século X'
} else if (n > 1100 && n < 1200) {
    return 'Século XI'
}else if (n > 1200 && n < 1300) {
    return 'Século XII'
}else if (n > 1300 && n < 1400) {
    return 'Século XIII'
}else if (n > 1400 && n < 1500) {
    return 'Século XIV'
}else if (n > 1500 && n < 1600) {
    return 'Século XV'
}else if (n > 1600 && n < 1700) {
    return 'Século XVI'
}else if (n > 1700 && n < 1800) {
    return 'Século XVII'
}else if (n > 1800 && n < 1900) {
    return 'Século XVIII'
}else if (n > 1900 && n < 2000) {
    return 'Século XX'
}else if (n > 2000) {
    return 'Século XXI'
}
}
console.log (seculo(1190)) 

//EXERCICO6
//A.
function imprimeLength(array) {
    return array.length
    }
console.log(imprimeLength([10, 23, 45, 78, 90, 52, 35, 67, 84, 22]))

//B.
function paridade(n) {
    if (n % 2 == 0) {//if true
        return "Par"
    } else {return "Impar"}
}
console.log(paridade(8))

//C.
function numerosPares(array) {
    novaArray = []
    for (let x of array) {
        if ( x % 2 == 0 ) {
        novaArray.push(x) }
}   return novaArray.length
}
console.log(numerosPares([1, 2, 3, 4, 5, 6]))

//D. As duas funções foram utilizadas juntas.