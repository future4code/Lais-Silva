function discoverHistoricalAge(year, beforeOrAfter) {
    if (year < 4000 && beforeOrAfter === "AC") {
        console.log(`O ano ${year} AC faz parte da Pré-Historia`);
    }
    else if (year < 476) {
        console.log(`O ano ${year} DC faz parte da Idade Antiga`);
    }
    else if (year < 1453) {
        console.log(`O ano ${year} DC faz parte da Idade Média`);
    }
    else if (year < 1789) {
        console.log(`O ano ${year} DC faz parte da Idade Moderna`);
    }
    else if (year > 1789) {
        console.log(`O ano ${year} DC faz parte da Idade Contemporânea`);
    }
}
discoverHistoricalAge(1, "trezentos");
//# sourceMappingURL=desafio2.js.map