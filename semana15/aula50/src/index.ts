import { Client } from './Client'
import { Place } from './Place'
import { Commerce } from './Commerce'
import { Industry } from './Industry'
import { Residence } from './Residence'
import { ClientManager } from './ClientManager'
import { ResidencialClient } from './ResidencialClient'
import { CommercialClient } from './CommerceClient'

const client: Client = {
  name: "Jojo",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}
// 1.
// a. Todas as informações do usuário puderam ser mostradas pois são todas públicas.

//2. 

const newPlace: Place = new Place("123456")

// a. "Cannot create an instance of an abstract class."
// b. É preciso criar uma subclasse à classe abstrata para criar uma instância dela. 

// 3. 

const newResidence: Residence = new Residence(4, "casinha")
console.log(newResidence.getCep())
// const newIndustry: Industry = new Industry(4, "industriazinha")
// const newCommerce: Commerce = new Commerce(4, "comerciozinho")

// 4.  A classe ResidencialClient tem todas as exigências de métodos
// e parâmetros exigidos pela classe Client e pela classe ResidencialClient.

// 5. a. Ambas classes possuem name, cep, name, registrationNumber e consumedEnergy (comuns da classe Client). 
// b. A classe IndustrialClient possui cnpj e floorsQuantity.

// 6. a. Deve ser filha do Industry para herdar todas as propriedades, métodos como seus pais. 
// Ele pode substituir alguns desses e implementar novos, mas o material pai já está incluído.
// b. Deve implementar a classe Client, mais abstrata, podendo aumentá-la. 
// c. Não parece por enquanto ser necessário setar/alterar qualquer informação da indústria. 

// 7. Arquivo ClientManager.ts

// 8. Arquivo ClientManager.ts

// Desafios

// 1. Arquivo ClientManager.ts

const pessoaAh: ResidencialClient = new ResidencialClient("Pessoa A", 10, "varios numeros estranhos", 1, "cep1")
const pessoaBê: CommercialClient = new CommercialClient("Pessoa C", 10, "varios numeros", "cep louco", 3)


const newManager: ClientManager = new ClientManager()
newManager.addClient(pessoaAh)
newManager.addClient(pessoaBê)

newManager.printClients()