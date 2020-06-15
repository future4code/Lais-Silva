const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let enviarEmail = (consuntas) => {
    for (let pessoa of consultas) {
        if (pessoa.genero === "masculino" && pessoa.cancelada === true) {
            alert (`Olá, Sr. ${ pessoa.nome }. Estamos enviando esta mensagem para
                lembrá-lo da sua consulta no dia ${ pessoa.dataDaConsulta } foi cancelada. Se quiser, pode entrar em 
                contato conosco para remarcá-la.`)
        } if (pessoa.genero !== "masculino" && pessoa.cancelada === true) { 
            alert (`Olá, Sra ${ pessoa.nome }. Estamos enviando esta mensagem para
                lembrá-la da sua consulta no dia ${ pessoa.dataDaConsulta } foi cancelada. Se quiser, pode entrar em 
                contato conosco para remarcá-la.`)
        } if (pessoa.genero === "masculino" && pessoa.cancelada === false) {
            alert (`Olá, Sr. ${ pessoa.nome }. Estamos enviando esta mensagem para
                lembrá-lo da sua consulta no dia ${ pessoa.dataDaConsulta }. Por favor, acuse
                o recebimento deste e-mail.`)
        } else { 
            alert (`Olá, ${ pessoa.nome }. Estamos enviando esta mensagem para
                lembrá-lo da sua consulta no dia ${ pessoa.dataDaConsulta }. Por favor, acuse
                o recebimento deste e-mail.`)
        }
    }
    
}

enviarEmail(consultas)
