import { Employee } from './Employee';

export class Seller extends Employee {
    private salesQuantity: number = 0
    static COMISSION = 5

    public setSalesQuantity(value: number) : void {
        this.salesQuantity = this.salesQuantity + value
    }
    public getSalesQuantity() : number {
        return this.salesQuantity
    }
    public calculateTotalSalary() : number {
        return this.baseSalary + 400 + (Seller.COMISSION * this.salesQuantity)
    }
}