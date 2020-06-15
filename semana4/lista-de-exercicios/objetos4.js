let pessoa = {
    nome: 'Lais',
    idade: 25,
    email: 'lais@lais',
    endereço: 'Rua Martim Francisco'
}

function anonimizarPessoa (pessoa) {
    let pessoaAnonima = {
        nome: 'ANONIMO',
        idade: pessoa.idade,
        email: pessoa.email,
        endereço: pessoa.endereço 
    }
    console.log(pessoaAnonima)
}

console.log(anonimizarPessoa(pessoa))
console.log(pessoa)