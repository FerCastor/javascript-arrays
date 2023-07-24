const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) { 
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        const [alunos, medias] = listaDeAlunosEMedias; // Mesma coisa que as duas linhas do código que foi comentado acima


        const indice = alunos.indexOf(aluno);

        console.log(`A média de ${aluno} é ${medias[indice]}.`);
    } else {
        console.log('Aluno não encontrado.');
    }
}

exibeNomeENota("João");
