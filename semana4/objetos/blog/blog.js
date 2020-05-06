
const titulo = document.getElementById('titulo').value
const autor = document.getElementById('autor').value
const texto = document.getElementById('texto').value

//const post = {
//    tituloDoTexto:  [],
//   autorDoTexto: [],   
//    conteudodoTexto: []    
// }

function postar() {
    
    const mostraTitulo = document.getElementById('postados')
    const mostraAutor = document.getElementById('postados')
    const mostraTexto = document.getElementById('postados')

    mostraTitulo.innerHTML += '<p> Título: ' + titulo + '</p>';
    mostraAutor.innerHTML += '<p> Autor: ' + autor + '</p>';
    mostraTexto.innerHTML += '<p> Texto: ' + texto + '</p>';
   
    document.getElementById('titulo').value=''; 
    document.getElementById('autor').value=''; 
    document.getElementById('texto').value=''; 
    
}

console.log(post) 

