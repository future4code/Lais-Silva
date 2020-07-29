// a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.
type plate = {
    name: string,
    price: number,
    sellPrice: number,
    ingredients: string[]
};

const plates: plate[] = [];

function newPlate(newPlate: plate): void {
    plates.push(newPlate)
};

newPlate({ name: "ao sugo", price: 10, sellPrice: 20, ingredients: ["macarrão", "sal", "tomate", "carne"] });
newPlate({ name: "pure", price: 10, sellPrice: 20, ingredients: ["batata", "sal", "azeite"] });


// b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome. 
function findPlate(plates: plate[], searchName: string): plate[] {
    return plates.filter((plate) => {
        return plate.name === searchName
    })
};
console.log(findPlate(plates, "pure"))

// c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.
type sell = {
    plateName: string, 
    clientName: string 
};

const allSells: sell[] = [];

function handleSell(array: sell[], newSell: sell) : void {
    array.push(newSell)
}

// d) Escreva uma função que determine o lucro do restaurante.
// price * lenght