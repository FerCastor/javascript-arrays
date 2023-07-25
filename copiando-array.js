const notas = [7, 7, 8, 9]

const novasNotas = [...notas, 10]; // Se colocar algum valor após ou antes dos valores originais, basta colocar a virgula para separar a cópia do valor que será adicionado

novasNotas.push(10);

const exibeNota = novasNotas.forEach(function exibeNaTela(nota) {
    return console.log(nota);
});

console.log(`Novas notas: ${novasNotas}`)
console.log(`Notas originais: ${notas}`)
