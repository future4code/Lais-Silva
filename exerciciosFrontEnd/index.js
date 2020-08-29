// exercicio1
const reverse = (string) => {
    return a.split('').reverse().join('');
};
const a = '123'
console.log(reverse(a))

// exercicio2
const checkPalindromo = (string) => {
    const reverseString = string.split('').reverse().join('')
    if (reverseString === string) {
        console.log("palindromo");
    } else {
        console.log("ñ palindromo");
    }
};
console.log(checkPalindromo('arara'))

// exercicio3
const returnCombinations = (str) => {
    const a = str.split('')
    let combinations = []
    for (i = 1; i < a.length; i++) {
        combinations.push([a[0], a[i]]);
    }
    return combinations.join('');
};
console.log(returnCombinations('pão'))

// exercicio4
const orderString = (str) => {
    const order = str.split('').sort().join('');
    return order;
};
console.log(orderString('koa'))

// exercicio5
const biggerCase = (str) => {
    let words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        let w = words[i];
        words[i] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
};
console.log(biggerCase('a namorada da viuva'))

// exercicio6
const biggerWord = (str) => {
    return str.match(/\w+/g).sort((a, b) => b.length - a.length)[0];
};
console.log(biggerWord('a namorada da viuva'))

// exercicio7
const checkVowel = (str) => {
    let numberOfVowel = 0
    const vowel = ['a', 'e', 'i', 'o', 'u']
    var i;
    for (i = 0; i < str.length; i++) {
        if (vowel.indexOf(str[i]) !== -1) {
            numberOfVowel++
        }
    }
    return numberOfVowel;
}
console.log(checkVowel('namorada'))

// exercicio8
const checkBiggerNumber = (arr) => {
    const orderedArr = arr.sort();          
    const secondBigger = orderedArr[1];
    const i = orderedArr.length 
    const secondLower = orderedArr[i- 1];
    console.log(orderedArr)
    return (secondBigger, secondLower)
    }
console.log(checkBiggerNumber([8, 2, 3, 7]))