const notas = [10, 6, 8, 5.5, 10];
let soma = 0;

notas.pop();

for (pos in notas) {
    let nota = notas[pos];
    soma += nota;
    var total = notas.length;
}

media = soma / total;

console.log(`A média é: ${media.toFixed(2)}`);
