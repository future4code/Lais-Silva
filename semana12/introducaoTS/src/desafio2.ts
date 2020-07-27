// enum HISTORYCAL_AGES {

// }

function discoverHistoricalAge (year: number, beforeOrAfter?: string) : void {

    if (year < 4000 && beforeOrAfter === "AC") {
        console.log(`O ano ${year} AC faz parte da Pré-Historia`)
    } 
    else if (year < 476) {
        console.log(`O ano ${year} DC faz parte da Idade Antiga`)
    } else if (year < 1453) {
        console.log(`O ano ${year} DC faz parte da Idade Média`)
    } else if (year < 1789) {
        console.log(`O ano ${year} DC faz parte da Idade Moderna`)
    } else if (year > 1789){
        console.log(`O ano ${year} DC faz parte da Idade Contemporânea`)
    }
    // } else if (year !== number && beforeOrAfter ){
    //     console.log("Você nao indicou corretamente os dados necessários")
    // }
}

discoverHistoricalAge(1,"trezentos")