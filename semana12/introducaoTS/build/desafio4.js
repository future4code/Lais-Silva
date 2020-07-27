const plates = [];
function newPlate(newPlate) {
    plates.push(newPlate);
}
;
newPlate({ name: "ao sugo", price: 10, sellPrice: 20, ingredients: ["macarrão", "sal", "tomate", "carne"] });
newPlate({ name: "pure", price: 10, sellPrice: 20, ingredients: ["batata", "sal", "azeite"] });
function findPlate(plates, searchName) {
    return plates.filter((plate) => {
        return plate.name === searchName;
    });
}
console.log(findPlate(plates, "pure"));
//# sourceMappingURL=desafio4.js.map