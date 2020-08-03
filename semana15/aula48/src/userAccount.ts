import { JSONManager } from './JSONManager'
import { Bank } from './bank'


const fileManager: JSONManager = new JSONManager('./accounts.json')

// 1. O construtor serve para auxiliar a criação de
// novas instâncias da classe onde é usado. É possível 
// tornar alguns dados inicialmente fixos. 

// 2. O console.log do constructor apareceu uma única vez. 

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: any[] = [];
    fileManager: JSONManager = fileManager

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        // console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getBalance(): number {
        console.log("Seu saldo é R$ ", this.balance)
        return this.balance
    }

    public addBalance(value: number): void {
        // this.balance = this.balance + value
        // fileManager.writeToDataBase(this.balance)
        console.log('Saldo atualizado com sucesso. Novo saldo: R$ ', this.balance)
    }

    public getTransactions(): any[] {
        console.log(this.transactions)
        return this.transactions
    }
};

const newName: string = process.argv[2]
const newCPF: string = process.argv[3]
const newAge: number = Number(process.argv[4])

const newUserAccont: UserAccount = new UserAccount(newName, newCPF, newAge)

// 3. Para acessar informações privadas usamos os métodos getter
// presentes/declaradas na classe.

// 4.

// console.log(newUserAccont.getBalance())





