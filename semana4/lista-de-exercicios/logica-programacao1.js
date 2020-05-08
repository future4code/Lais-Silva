//EXERCICIO1
// Pode-se inteirar arrays por meio de for, for each, while. 
//for:

let array1 = ['a', 'b', 'c']
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

//for of

let array3 = [5, 6, 7, 8]
let i = 0
for (let numeros of array3) {
    numeros = array3[i]    
    console.log(array3[i])
    i++ 
}

//while

const array2 = [1,2,3,4]
let i = 0
let l = array2.length
while ( i < l ) {
   console.log(array2[i]);
   i ++; 
} 

