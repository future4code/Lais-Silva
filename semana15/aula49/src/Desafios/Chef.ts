import { RestEmployee } from './RestEmployee';
import { Dish } from './Dish'

export class Chef extends RestEmployee {
    
    constructor(name: string, baseSalary: number, job: string = "Chef"){
        super(name, baseSalary, job)
    }

    public removeDishFromMenu(name: string, menu: Dish[]): Dish[] {
        const newMenu: Dish[] = []
        for (let plate of menu) {
            if (plate.name !== name) {
                newMenu.push(plate)
            }
        }
        return newMenu
    }
    public addDishFromMenu(dish: Dish, menu: Dish[]): Dish[] {
        menu.push(dish)
        return menu
    }
    
}