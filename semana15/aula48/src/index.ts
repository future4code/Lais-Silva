import { UserAccount } from './userAccount';
import { JSONManager } from './JSONManager';
import { Bank } from './bank';



const newName: string = "ana"
const newAge: number = 30
const newCPF: string = "1234567"

const newUserAccont: UserAccount = new UserAccount(newName, newCPF, newAge)

const fileManager: JSONManager = new JSONManager('./accounts.json')

const accountsList: UserAccount[] = fileManager.readDataBase()


const bank = new Bank(accountsList, fileManager) 
bank.createAccount(newUserAccont)
newUserAccont.getBalance()