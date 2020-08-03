import * as fs from 'fs';

const showAllClients = (): void => {
    try {
      const allClients: string = fs.readFileSync('./data.json').toString()
      console.log(JSON.parse(allClients))
    } catch (error) {
      console.log("Erro ao acessar clientes: ", error)
    }
  };
  
  // showAllClients();
  
  