//INTERPRETAÇÃO DE CÓDIGO
// EXERCÍCIO1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado =  bool1 && bool2 && bool2
console.log("a. ", resultado) //a.  false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) //b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //c. true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) //d. false

console.log("e. ", typeof resultado) //e. boolean

// EXERCÍCIO2 

/*a. Array é um vetor que contem e guarda valores. Se declara com array=[..,..,..,..] 
b. O index inicial de uma array é 0.
c. Se determina o tamanho da arrey com tamanho = array.lenght
d. Mensagens impressas no console abaixo. */

let array
console.log('I. ', array) //I. undefined

array = null
console.log('II. ', array) //II. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length) //III. 11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) //IV. 3 e 4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)//V. 19 e 9

i+=1 
array[i] = array[i-1]
console.log('VI. ', array[i])//VI. 3

i = array.length - 1 
array[i] = array[i-3] 
const resultadoC = array[i]%array[1] 
console.log('VII. ', resultadoC)//VII. 1

//ESCRITA DE CÓDIGO

//EXERCICIO1

valor1 = (77 - 32)*(5/9) + 273.15
console.log ("77 graus Fahrenheit equivalem à", valor1, "graus Kelvin")
//77 graus Fahrenheit equivalem à  304.15 graus Kelvin.

valor2 = 80*(9/5) + 32
console.log ("80 graus Celsius equivalem à", valor2, "graus Fahrenheit")
//80 graus Celsius equivalem à 176 graus Fahrenheit

valor3 = 30*(9/5) + 32
valor4 = (valor3 - 32)*(5/9) + 273.15
console.log ("30 graus Celsius equivalem à", valor3, "graus Fahrenheit e à", valor4, "graus Kelvin")
//30 graus Celsius equivale à 86 graus Fahrenheit e à 303.15 graus Kelvin.

valor5 = prompt("Digite o valor de graus Celcius que você deseja converter:")
valor6 = valor5 * (9/5) + 32
valor7 = (valor6 - 32)*(5/9) + 273.15
console.log (valor5, "Celsius equivalem à", valor6, "graus Fahrenheit e à", valor7, "graus Kelvin")

//EXERCICIO2

p1 = prompt("1. Qual a melhor comida do mundo?")
console.log ("1. Qual a melhor comida do mundo? Resposta:", p1) 

p2 = prompt("2. Se você não disse pizza, está errad@. Mas me diz então como sua comida preferida pode ser melhor que pizza?")
console.log ("2. Porque", p1, "é melhor que pizza? Se você disse pizza, me fala seu sabor preferido. Resposta:", p2)

p3 = prompt("3. Agora me diz: qual sua idade? Só pra eu ver um negocio...")
console.log ("3. Qual sua idade? Resposta:", p3)

p4 = prompt("4. Já pensou se existem mundos paralelos aos nossos onde nao existe pizza? (imagina que tristeza)")
console.log ("4. E ai, ja pensou na existencia de mundos paralelos sem pizza? Resposta:", p4)

p5 = prompt("5. Agora, escreva uma mensagem pro seu EU paralelo que vive num mundo sem pizza.")
console.log ("5. Agora, escreva uma mensagem pro seu EU paralelo que vive num mundo sem pizza. Mensagem:", p5)

//EXERCÍCIO3

k = prompt("Quantos quilowatts você e sua familia consumiram esse mês em casa?")
valor = k * 1/2
valorDesconto = valor - (valor*0.15)
console.log("Você deve R$", valor, "por este gasto de energia.")
console.log("MAS, considerando um desconto de 15%, você deve apenas R$", valorDesconto)

//DESAFIOS

//1.A.
//kg = lb/2.2046
kg1 = 20/2.2046
console.log("20lbs equivalem à", kg1, "kilogramas")

//kg = oz/35.274
kg2 = 10.5/35.274
console.log("10.5oz equivalem à", kg2, "kilogramas")

//m = mi/0.00062137
m = 100/0.00062137
console.log("100mi equivalem à", m, "metros.")

//m = fr/3.2808
m2 = 50/3.2808
console.log("50fts equivalem à", m2, "metros.")

//l = gal/0.26417
l = 103.56/0.26417
console.log("103.56gal equivalem a", l, "litros")

//l = x*0,24
l2 = 450*0.24
console.log("450 xícaras equivalem à", l2, "litros.")

x = prompt("Digite o valor de xícaras que converteremos em litros pra você.")
litros = x*0.24
console.log(x, "xícaras equivalem à", litros, "litros.")
