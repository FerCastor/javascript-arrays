const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
console.log(`A pessoa que está na posição 1 da lista de alunos é ${listaDeAlunosEMedias[0][0]}
A nota dessa pessoa é ${listaDeAlunosEMedias[1][0]}`);


for (aluno in alunos) {
    console.log(`A pessoa que está na posição ${Number(aluno) + 1} é ${alunos[aluno]}`)
}

