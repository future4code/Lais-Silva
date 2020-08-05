import { MemoryMeasurement } from "vm";
import { UserAccount } from './userAccount';
import { JSONManager } from './JSONManager';
import { create } from "domain";

export class Bank {
    private accounts: UserAccount[]
    private fileManager: JSONManager;

    constructor(accounts: UserAccount[], fileManager: JSONManager) {
        this.accounts = accounts;
        this.fileManager = fileManager
    }

    public createAccount(userAccount: UserAccount): void {
        this.accounts.push(userAccount)
        fileManager.writeToDataBase(this.accounts)
        console.log("Conta criada.")
    }

    public getAllAccounts(): UserAccount[] {
        const fileManager: JSONManager = new JSONManager('./accounts.json')
        const accountsList: any = fileManager.readDataBase()
        return accountsList
    }

    public getAccountByCpfAndName(cpf: string, name: string):
        UserAccount | undefined {
        const fileManager: JSONManager = new JSONManager('./accounts.json')
        const accountsList: any = fileManager.readDataBase()
        for (let client of accountsList) {
            if (cpf === client.cpf || name === client.name) {
                return client
            }
        }
    }
};

const fileManager: JSONManager = new JSONManager('./accounts.json')

