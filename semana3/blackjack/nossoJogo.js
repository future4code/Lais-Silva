let carta1 = comprarCarta()
let carta2 = comprarCarta()
let carta3 = comprarCarta()
let carta4 = comprarCarta()
let valor1 = carta1.valor + carta2.valor
let valor2 = carta3.valor + carta3.valor
if(confirm("Quer começar uma nova rodada?")) {
   console.log("Usuário - cartas: ", carta1.texto, "e", carta2.texto, " - pontuação: ", valor1)
   console.log("Computador - cartas: ", carta3.texto, "e", carta4.texto, " - pontuação: ", valor2)
   if (valor1 > valor2) { 
      console.log("Você ganhou!")      
   } else if (valor2 > valor1) {
      console.log("Seu adiversário venceu :(")
   } else {
      console.log("Empaaaaaaaate!")
   }
} else {
   console.log("O jogo terminou.")
}*/

