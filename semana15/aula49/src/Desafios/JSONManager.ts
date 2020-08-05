import * as fs from 'fs';

export class FileManager {
    public getData(json: any) : any {
        try {
            const fileData: string = fs.readFileSync(json).toString()
            return JSON.parse(fileData)
        } catch (error) {
            console.log("Erro ao acessar dados: ", error)
        }
    }

    public setData(data: any) : any {
        try {
            const dataAsString: any = JSON.stringify(data, null, 2)
            fs.writeFileSync('./restaurant.json', dataAsString)
        } catch (error) {
            console.log("Erro ao alterar dados: ", error)
        }
    }
}