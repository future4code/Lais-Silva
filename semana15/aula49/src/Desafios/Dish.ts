export class Dish {
    public name: string 
    public time: number
    public ingredients: string[]
    public coast: number
    public price: number
    constructor(
        name: string, 
        time: number, 
        ingredients: string[],
        coast: number, 
        price: number
        ){
            this.name = name
            this.time = time
            this.coast = coast
            this.ingredients = ingredients
            this.price = price
        }
}