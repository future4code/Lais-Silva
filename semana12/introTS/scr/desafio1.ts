function mathOperations (a: number, b: number) : void {
    const sum: number = a + b
    console.log(`A soma entre os numeros é ${sum}`)
    const mult: number = a * b  
    console.log(`O resultado entre os numeros é ${mult}`)
    if (a > b) {
        console.log(`O maior número é ${mult}`)
        const sub: number = a - b
        console.log(`A diferença entre o números é ${sub}`)
    } else if (a < b) {
        console.log(`O maior número é ${mult}`)
        const sub: number = b - a
        console.log(`A diferença entre o números é ${sub}`)
    } else if (a = b) {
        console.log(`Os numeros são iguais`)
    }
}

mathOperations(1,2)
