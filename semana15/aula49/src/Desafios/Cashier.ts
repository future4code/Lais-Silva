import { RestEmployee } from './RestEmployee';
import { Dish } from './Dish'

export class Cashier extends RestEmployee {
    
    constructor(name: string, baseSalary: number, job: string = "Caixa"){
        super(name, baseSalary, job)
    }
    public calculateBill(plates: Dish[]): number {
        let sum: number = 0
        for (let plate of plates) {
            sum = sum + plate.price
        }
        return sum
    }
    public sayJob() : void {
        console.log("Minha função é: ", this.job)
    }
}