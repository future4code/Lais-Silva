function adicionarItem() {
    const input = document.querySelector("input")
    
    const atividade = input.value
    
    var diaEscolhido = document.getElementById("diaDaSemana").value;
        
    const ondeAcrescenta = document.getElementById(diaEscolhido)
    
    if (atividade === "") {
        alert("Escreva algo!")
    } else {
    ondeAcrescenta.innerHTML += "<li>" + atividade + "</li>"    
    input.value = ""
    }    
}

//function limpar() {
//    const apagar1 = document.getElementById(segunda)
//    apagar1.innerHTML = " "}