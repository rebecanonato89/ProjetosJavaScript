let num = gets();
let listaAlunos = [];
let corTamanho = [];

for (i = 0; i < num; i++) {
    let aluno = {};
    aluno.nome = gets();
    corTamanho = gets().split(' ');
    aluno.cor = corTamanho[0];
    aluno.tamanho = corTamanho[1];
    listaAlunos[i] = aluno;
}

function ordena(a, b) {
    if (a.cor < b.cor) return -1;
    if (a.cor > b.cor) return 1;
    if (a.cor == b.cor) {
        if (a.tamanho < b.tamanho) return 1;
        if (a.tamanho > b.tamanho) return -1;
        if (a.tamanho == b.tamanho) {
            if (a.nome < b.nome) return -1;
            if (a.nome > b.nome) return 1;
            else return 0;
        }
    }
}

listaAlunos.sort(ordena);
for (item of listaAlunos) {
    console.log(item.cor, item.tamanho, item.nome);
}