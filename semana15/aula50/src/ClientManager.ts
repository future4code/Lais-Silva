import { Client } from './Client'

export class ClientManager {
    private clients: Client[] = []
    public getClients(): number {
        return this.clients.length
    }
    public addClient(newClient: Client): void {
        this.clients.push(newClient)
    }

    public calculateBillOfClient(registrationNumber: number): number {
        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber
        })
        if (foundClient) {
            // verificando se o usuário existe
            return foundClient.calculateBill()
        }
        return 0;
    }
    public getAllPayments() : number {
        let sum: number = 0
        this.clients.forEach((client) => {
           sum = sum + client.calculateBill()
        })
        return sum 
    }
    public deletClient(registrationNumber: number) : Client[]{
        const newClientsList: Client[] = this.clients.filter((client) => {
            return client.registrationNumber !== registrationNumber
        })
        return newClientsList
    }
    public printClients() : void {
        this.clients.forEach((client) => {
            console.log("NOME DO CLIENTE: ", (client.name).toUpperCase(),
            "-", "NUMERO DE REGISTRO: ", client.registrationNumber, 
            "-", "ENERGIA CONSUMIDA: ", client.consumedEnergy, 
            "-", "CONTA TOTAL: ", client.calculateBill())
        })        
    }
   
}