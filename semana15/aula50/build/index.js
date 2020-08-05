"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientManager_1 = require("./ClientManager");
const ResidencialClient_1 = require("./ResidencialClient");
const CommerceClient_1 = require("./CommerceClient");
const client = {
    name: "Jojo",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2;
    }
};
// 1.
// console.log(client.name);
// console.log(client.registrationNumber);
// console.log(client.consumedEnergy);
// console.log(client.calculateBill());
// a. Todas as informações do usuário puderam ser mostradas pois são todas públicas.
//2. 
// const newPlace: Place = new Place("123456")
// a. "Cannot create an instance of an abstract class."
// b. É preciso criar uma subclasse à classe abstrata para criar uma instância dela. 
// 3. 
// const newResidence: Residence = new Residence(4, "casinha")
// console.log(newResidence.getCep())
// const newIndustry: Industry = new Industry(4, "industriazinha")
// console.log(newIndustry.getCep())
// const newCommerce: Commerce = new Commerce(4, "comerciozinho")
// console.log(newCommerce.getCep())
// 4.  A classe ResidencialClient tem todas as exigências de métodos
// e parâmetros exigidos pela classe Client e pela classe ResidencialClient.
// 5. a. Ambas classes possuem name, cep, name, registrationNumber e consumedEnergy (comuns da classe Client). 
// b. A classe IndustrialClient possui cnpj e floorsQuantity.
// 6. a. Deve ser filha do Industry para herdar todas as propriedades, métodos como seus pais. Ele pode substituir alguns desses e implementar novos, mas o material pai já está incluído.
// b. Deve implementar a classe Client, mais abstrata, podendo aumentá-la. 
// c. Não parece por enquanto ser necessário setar/alterar qualquer informação da indústria. 
// 7. Arquivo ClientManager.ts
// 8. Arquivo ClientManager.ts
// Desafios
// 1. Arquivo ClientManager.ts
const residencialClient = new ResidencialClient_1.ResidencialClient("Jojo", 1, 10, "cpf", 1, "cep1");
const residencialClient1 = new ResidencialClient_1.ResidencialClient("Jaja", 2, 10, "cpf", 1, "cep2");
const residencialClient2 = new ResidencialClient_1.ResidencialClient("Jeje", 3, 10, "cpf", 1, "cep3");
const newManager = new ClientManager_1.ClientManager();
newManager.addClient(residencialClient);
newManager.addClient(residencialClient1);
newManager.addClient(residencialClient2);
newManager.printClients();
const Bê = new CommerceClient_1.CommercialClient("Bê", 10, "varios numeros loucos", "cep louco", 3);
console.log(Bê);
