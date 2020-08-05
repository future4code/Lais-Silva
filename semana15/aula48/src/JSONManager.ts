import * as fs from 'fs';

import { UserAccount } from './userAccount';

export class JSONManager {
    private fileName: string

    constructor(fileName: string) {
        this.fileName = fileName
    }
    // Getter
    public readDataBase() {
        try {
            const fileData: string = fs.readFileSync('./accounts.json').toString()
            return JSON.parse(fileData)
        } catch (error) {
            console.log("Erro ao acessar base de dados: ", error)
        }
    };
    // Setter
    public writeToDataBase(data: UserAccount[]) {
        try {
            const dataAsString: string = JSON.stringify(data, null, 3)
            fs.writeFileSync(this.fileName, dataAsString)
        } catch (error) {
            console.log("Erro ao alterar base de dados: ", error)
        }
    };

};