function comparaNumeros (a, b) {
        if (a > b) {
        console.log(`Maior número: ${a}`)
        } else {
        console.log(`Maior número: ${b}`)}

        if (a % b === 0) {
        console.log(`${a} é divisível por ${b}`)
        } else {
            console.log(`${a} não é divisível por ${b}`)}

        if (b % a === 0) {
        console.log(`${b} é divisível por ${a}`)
        } else {
            console.log(`${b} não é divisível por ${a}`)}
        
        let diferenca = (a - b)*(-1)     
        console.log(`A diferença entre eles é ${diferenca}`)    
}
