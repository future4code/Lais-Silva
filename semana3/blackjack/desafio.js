let carta1 = comprarCarta() 
let carta2 = comprarCarta()
let carta3 = comprarCarta ()
let carta4 = comprarCarta ()
let carta5 = comprarCarta ()
let valor1 = carta1.valor + carta2.valor
let valor2 = carta3.valor + carta3.valor
let valor3 = valor1 + carta6.valor
let valor4 = valor3 + carta7.valor  

if (carta1 === "A" && carta2 ==="A") {
   carta1 = carta5
}

if(confirm("Quer começar uma nova rodada?")) {
   if (confirm("Suas cartas são", carta1.texto, carta2.texto, 
      ". A carta revelada do computador é", carta3.texto,
      "Deseja comprar mais uma carta?")) {
         if (confirm("Suas cartas são", carta1.texto, carta2.texto, 
         ". A carta revelada do computador é", carta3.texto,
         "Deseja comprar mais uma carta?")) {      
    }      
} else {
   console.log("O jogo terminou.")
}

/*if (valor1 > valor2) { 
      console.log("Você ganhou!")      
   } else if (valor2 > valor1) {
      console.log("Seu adiversário venceu :(")
   } else {
      console.log("Empaaaaaaaate!")
      {
         if(confirm( +
         "\n"+  // \n faz pular a linha
         "Deseja comprar mais uma carta?")) {
            alert("Suas cartas são", carta1.texto, carta2.texto, carta6.texto, carta7.texto, ". Valor: ", valor4)
         } else alert("Suas cartas são", carta1.texto, carta2.texto, carta6.texto, ". Pontuação: ", valor3)}

      //console.log("Usuário - cartas: ", carta1.texto, carta2.texto, " - pontuação: ", valor1)
      //console.log("Computador - cartas: ", carta3.texto, carta4.texto, " - pontuação: ", valor2)
      }*/