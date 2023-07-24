// const arrayVazia = [,,,];

// console.log(arrayVazia.length)
// arrayVazia.push(50)
// console.log(arrayVazia)
// console.log(arrayVazia.length)

// Criando um array esparso representando uma matriz de 3x3
const ArrayEsparso = {
    "0,0": 5,
    "0,1": 0,
    "0,2": 0,
    "1,0": 0,
    "1,1": 5,
    "1,2": 0,
    "2,0": 0,
    "2,1": 0,
    "2,2": 5
};

// Acessando elementos
console.log(ArrayEsparso["0,0"])    // Saída: 5
console.log(ArrayEsparso["0,1"])    // Saída: 0

// Elementos não definidos tem valor padrão undefined
console.log(ArrayEsparso["3,0"]);   // Saída: undefined



