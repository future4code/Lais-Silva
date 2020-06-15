let pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

let filtraAdultos = pessoas.filter((pessoas) => {
    return pessoas.idade <= 20 ;
})

console.log(filtraAdultos)

let filtraJovens = pessoas.filter((pessoas) => {
    return pessoas.idade > 20 ;
})