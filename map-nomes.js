const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);



/* Testes */
const listaValores = [];
let soma = 0;
const adicionaValor = function(valor) {
    listaValores.push(valor); 
}

adicionaValor(5);
adicionaValor(8);
adicionaValor(3);
adicionaValor(1);


listaValores.forEach(function(valor) {
    soma += valor;
})

console.log(listaValores);
console.log(soma);