import { Residence } from './Residence'
import { Client } from './Client'

export class ResidencialClient extends Residence implements Client {
    public registrationNumber = Math.random()
    constructor(
        public name: string,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }

    public getCpf(): string {
        return this.cpf
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}