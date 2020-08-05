import { User } from './User';
import { Customer } from './Customer'
import { Employee } from './Employee'
import { Seller } from './Seller'

// exercícios obrigatórios
// 1.

// const newUser: User = new User("abc123", "email@email", "name", "password")
// console.log("New User:", newUser)

// a. Não é possível acessar password pois é privada e nao contem nenhum getter específico. 
// b. A mensagem Chamando o construtor da classe User apareceu apenas 1 vez.

// // 2.

// const newCustomer: Customer = new Customer("ag", "ag@ag", "Angelica", "ag", "master")
// console.log("New Customer:",newCustomer)

// a. A mensagem Chamando o construtor da classe Customer apareceu apenas 1 vez.
// b. A mensagem Chamando o construtor da classe User apareceu 1 vez pois a cosntrução de um Customer se utiliza do constructor da classe User.

// 3.

// console.log("Purchase Total: ", newCustomer.purchaseTotal)
// console.log("Name: ", newCustomer.getName())
// console.log("Id: ", newCustomer.getId())
// console.log("E-mail: ", newCustomer.getEmail())
// console.log("Card: ", newCustomer.getCreditCard())

// a. Ainda não é possível acessar password pois é privada e nao contem nenhum getter específico. 

// 4.
// 5.
// newCustomer.introduceYourself()

// 6.

// let admissionDate: Date = new Date(2020, 9, 4)
// const newEmployee: Employee = new Employee("Ana", "ana@ana", "Ana", "senha", admissionDate, 1000)
// console.log(newEmployee.getName())
// console.log(newEmployee.getEmail())
// console.log(newEmployee.getId())
// console.log(newEmployee.getAdmissionDate())
// console.log(newEmployee.getBaseSalary())
// newEmployee.introduceYourself()

// a. A mensagem "Chamando o construtor da classe User" aparece uma vez. 
// b. É possível acessar os métodos para mostrar email, nome, id, introduceYourself e os específicos
// da classe, os métodos para acesso de salário base e data de admissão.

// 7. 

// console.log(newEmployee.calculateTotalSalary())

// // 8. 

// const newSeller: Seller = new Seller("ID", "jorge@jorge", "Jorge", "senha", new Date(1995,9,4), 1500)
// console.log(newSeller.getName())
// console.log(newSeller.getEmail())
// console.log(newSeller.getId())
// console.log(newSeller.getAdmissionDate())
// console.log(newSeller.getBaseSalary())
// newSeller.introduceYourself()

// a. Foi necessário passar como parâmetro tudo que é obrigatório para User e Employee: nome, email, 
// id, senha, data de admissão e salário base. 
// b. Não consegui acessar data de admissão nem base do salário enquanto
// não transformei os métodos getters em públicos (se tratavam de dados protegidos).

// 9.

// newSeller.setSalesQuantity(7)
// console.log("Mostra a quantidade de vendas: ", newSeller.getSalesQuantity())

// a. É possível imprimir dados sensíveis e protegidos pois seu getter
// é publico. 

// // 10. 

// console.log(newSeller.calculateTotalSalary())

// a. O valor retornado foi 1935, que significa 
// 1500 salario base + 400 benef. + (5 comiss * 7 vendas).


// desafios

import { Dish } from './Desafios/Dish';
import { SaltDish } from './Desafios/SaltDish';
import { Dessert } from './Desafios/Desserts';
import { Cashier } from './Desafios/Cashier';
import { Manager } from './Desafios/Manager';
import { Chef } from './Desafios/Chef';
import { FileManager } from './Desafios/JSONManager';
import { RestEmployee } from './Desafios/RestEmployee';
import * as fs from 'fs';

const Lasanha: SaltDish = new SaltDish("Lasanha", 20, ["massa", "molho", "presunto", "queijo"], 20, 40)
const Macarrão: SaltDish = new SaltDish("Macarrão", 20, ["massa", "molho"], 15, 30)

const Bolo: Dessert = new Dessert("Bolo", 25, ["farinha", "ovos", "chocolate"], 15, 30)
const Pudim: Dessert = new Dessert("Pudim", 40, ["leite", "ovos", "açúcar"], 15, 30)

export const allDishs: Dish[] = [Lasanha, Macarrão, Bolo, Pudim]

const newCashier: Cashier = new Cashier("Nome do Caixa",  1000,)
// console.log(newCashier.calculateBill(allDishs))

const newManager: Manager = new Manager("Nome da Gerente", 2000)

const newChef: Chef = new Chef("Nome da Chef", 1800)
console.log(newChef.removeDishFromMenu("Bolo", allDishs))

const allEmployees: RestEmployee[] = [newCashier, newChef, newManager]

const fileData: string = JSON.parse(fs.readFileSync('./restaurant.json').toString())


