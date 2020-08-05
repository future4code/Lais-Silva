import { Cashier } from './Cashier';

export class Manager extends Cashier {
    
    constructor(name: string, baseSalary: number, job: string = "Gerente"){
        super(name, baseSalary, job)
    }
    public sayJob() : void {
        console.log("Minha função é: ", this.job)
    }
}
