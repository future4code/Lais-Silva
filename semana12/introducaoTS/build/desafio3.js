function blackFridayPrice(products) {
    products.map((product) => {
        if (product.classification === "verão") {
            const newPrice = (product.price - (product.price * 0.05)).toFixed(2);
            console.log(`O novo preço da ${product.name} é R$ ${newPrice}`);
        }
        else if (product.classification === "inverno") {
            const newPrice = (product.price - (product.price * 0.1)).toFixed(2);
            console.log(`O novo preço de ${product.name} é R$ ${newPrice}`);
        }
        else if (product.classification === "intimas") {
            const newPrice = (product.price - (product.price * 0.07)).toFixed(2);
            console.log(`O novo preço de ${product.name} é R$ ${newPrice}`);
        }
        else if (product.classification === "banho") {
            const newPrice = (product.price - (product.price * 0.04)).toFixed(2);
            console.log(`O novo preço de ${product.name} é R$ ${newPrice}`);
        }
    });
}
blackFridayPrice([{ name: "blusa", price: 10, classification: "verão" }, { name: "biquininho", price: 20, classification: "banho" }]);
//# sourceMappingURL=desafio3.js.map