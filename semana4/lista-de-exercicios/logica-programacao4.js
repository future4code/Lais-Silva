function triangulos(a, b, c) {
    if (a === b && c === b) {
        console.log("Triangulo equilátero")
    } else if (a === b && b !== c || a === c && c !==b || c === b && b !== a) {
        console.log("Triangulo isóceles")
    } else {
        console.log("Triangulo escaleno")
    }
}

console.log(triangulos (10, 20, 20))