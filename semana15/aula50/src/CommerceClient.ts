import { Client } from './Client'
import { Commerce } from './Commerce'

export class CommercialClient extends Commerce implements Client {
    public registrationNumber = Math.random()
    
    constructor(public name: string,
    public consumedEnergy: number,
    private cnpj: string, 
    cep: string, 
    floorsQuantity: number) {
        super(floorsQuantity, cep)
    }
    public getCnpj() : string {
        return this.cnpj
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}