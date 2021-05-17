let totalDeCasos = parseInt(gets());
let cont = 0;
for (i = 0; i < totalDeCasos; i++) {
    let num = parseInt(gets());
    let senhaAntiga = gets().split(' ');
    let senha = [...senhaAntiga];
    let senhaOrdenada = senha.sort((a, b) => b - a);
    for (j = 0; j < num; j++) {
        if (senhaOrdenada[j] == senhaAntiga[j]) cont++;
    }
    console.log(cont);
    cont = 0;
}