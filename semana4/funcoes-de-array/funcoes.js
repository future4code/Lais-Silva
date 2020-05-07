let listaDeDespesas = []

function gerarDespesa(event) {
    valorDespesa = document.getElementById('valorDespesa')
    tipoDespesa = document.getElementById('tipoDespesa')
    extratoTotal = document.getElementById('extrato')
    
    let despesas = {
    valor: valorDespesa.value,
    tipo: tipoDespesa.value    
    }
  
    if (valorDespesa.value === "" || tipoDespesa.value === ""){
        alert("Nenhum campo pode estar vazio")
    } else { 
        listaDeDespesas.push(despesas) 
            
            let despesaOutros = listaDeDespesas.filter((despesa, index, array) => {
            if (despesa.tipo === "outros"){
            return true 
            } return false
            })

            let despesaVinil = listaDeDespesas.filter((despesa, index, array) => {
            if (despesa.tipo === "vinil"){
            return true 
            } return false
            })

            let despesaComida = listaDeDespesas.filter((despesa, index, array) => {
            if (despesa.tipo === "comida"){
            return true 
            } return false
            })
        
        valorDespesa.value = ""
        tipoDespesa.value = ""
    }
}

/*

function valorTotal {
    let total = 0
    listaDeDespesas.forEach((valor, index, array) => {
    let total = total += valor.valor
    })
    let totalEscrito = document.getElementById('extrato')
    totalEscrito.innerHTML = `<p> R$${total} ,00`
}

*/
