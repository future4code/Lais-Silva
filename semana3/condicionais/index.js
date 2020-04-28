//EX1
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} 
// Esse é um teste de par ou impar. 
//A mensagem "Passou no teste" aparece quando o numero é par. 
//Quando é impar, a mensagem é "Não passou no teste." 

//EX2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/* A. O código diz o preço de cada fruta.
B. O preço da fruta  Maçã  é  R$  2.25
C. 25.55
D. O preço da fruta  Pêra  é  R$  5*/

//EX3
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem 
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}
console.log(mensagem)
//Existe um erro pois "mensagem" esta dentro de um escopo que nao pode ser acessado pelo console, que esta fora desse escopo. 
//Let mensagem deveria estar fora do IF, assim o codigo funcionaria perfeitamente. 

//EX4 - ESCRITA DE CÓDIGO
//A.
let n1 = prompt("Digite o primeiro número:")
let n2 = prompt("Digite o segundo número:")
n1 = Number(n1)
n2 = Number(n2)
if (n1 > n2) {
    console.log(n1 , n2)
} else {
    console.log(n2 , n1)
}
//Os numeros iguais aparecem um ao lado do outro, sem mensagem de erro. 

//B.
let n1 = prompt("Digite o primeiro número:")
let n2 = prompt("Digite o segundo número:")
let n3 = prompt("Digite um terceiro número:")
n1 = Number(n1)
n2 = Number(n2)
n3 = Number(n3)
if (n1 > n2 && n2 > n3) {
    console.log(n1, n2, n3)    
} else if (n1 > n3 &&  n3 > n2) {
    console.log(n1, n3, n2)
} else if (n2 > n1 && n1 > n3) {
    console.log(n2, n1, n3)
} else if (n2 > n3 && n3 > n1) {
    console.log(n2, n3, n1)
} else if (n3 > n1 && n1 > n2) {
    console.log(n3, n1, n2)
} else if (n3 > n1 && n2 > n1) {
    console.log(n3, n2, n1)

//Quando os três numeros sao iguais, aparece: DevTools failed to load SourceMap: Could not load content for chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/include.postload.js.map: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME;

//C.
let n1 = prompt("Digite o primeiro número:")
let n2 = prompt("Digite o segundo número:")
let n3 = prompt("Digite um terceiro número:")
n1 = Number(n1)
n2 = Number(n2)
n3 = Number(n3)
if (n1 > n2 && n2 > n3) {
    console.log(n1, n2, n3)    
} else if (n1 > n3 &&  n3 > n2) {
    console.log(n1, n3, n2)
} else if (n2 > n1 && n1 > n3) {
    console.log(n2, n1, n3)
} else if (n2 > n3 && n3 > n1) {
    console.log(n2, n3, n1)
} else if (n3 > n1 && n1 > n2) {
    console.log(n3, n1, n2)
} else if (n3 > n1 && n2 > n1) {
    console.log(n3, n2, n1)
} else if (n1 === n3) {
    console.log("Facilita minha vida, escreva numeros diferentes!") 
} else if (n1 === n2) {
    console.log("Facilita minha vida, escreva numeros diferentes!")
} else if (n2 === n1) {
    console.log("Facilita minha vida, escreva numeros diferentes!") 
}
//EX5

let ossos = prompt("Esse é sustentado por um esqueleto com ossos?")
switch (ossos) {
    case 'NÃO':
    console.log("Seu animal é invertebrado!")
    break;
    case 'SIM':
    let pelos = prompt("Esse animal tem pêlos?")    
    switch (pelos) {
        case 'SIM':
        let rac = prompt ("Esse animal é racional?")  
            switch (rac) {
                case 'SIM':
                console.log("Você pensou no ser humano!")
                break;
                case 'NÃO':
                console.log("Posso dizer apenas que é um mamifero não humano.")    
                break;
            }
        case 'NÃO':
        let penas = prompt("Esse animal tem penas?")    
        switch (penas) {
            case 'SIM':
            console.log("Esse animal é uma ave!")
            break;
            case 'NÃO':
            let terrestre = prompt("Esse animal é terrestre?")
            switch (terrestre) {
                case 'NÃO':
                console.log("Esse animal é um peixe!")
                break;
                case 'SIM':
                let agua = prompt("Esse animal passa parte da vida na água?")
                switch (agua) {
                    case 'SIM':
                    console.log("Então é um anfíbio.")
                    break;
                    case 'NÃO':
                    console.log("Então é um anfíbio")
                    break;
                }    
            }
        }
    }       
}