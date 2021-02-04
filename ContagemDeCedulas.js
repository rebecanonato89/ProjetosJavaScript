
/*
    Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

 
Exemplo de Entrada	Exemplo de Saída
576                    576
                        5 nota(s) de R$ 100,00
                        1 nota(s) de R$ 50,00
                        1 nota(s) de R$ 20,00
                        0 nota(s) de R$ 10,00
                        1 nota(s) de R$ 5,00
                        0 nota(s) de R$ 2,00
                        1 nota(s) de R$ 1,00



11257                  11257
                            112 nota(s) de R$ 100,00
                            1 nota(s) de R$ 50,00
                            0 nota(s) de R$ 20,00
                            0 nota(s) de R$ 10,00
                            1 nota(s) de R$ 5,00
                            1 nota(s) de R$ 2,00
                            0 nota(s) de R$ 1,00



503                    503
                        5 nota(s) de R$ 100,00
                        0 nota(s) de R$ 50,00
                        0 nota(s) de R$ 20,00
                        0 nota(s) de R$ 10,00
                        0 nota(s) de R$ 5,00
                        1 nota(s) de R$ 2,00
                        1 nota(s) de R$ 1,00

*/




let valor = parseInt(gets());

let valorAux = valor;

let notaCem = 0;

let notaCinquenta = 0;

let notaVinte = 0;

let notaDez = 0;

let notaCinco = 0;

let notaDois = 0;

let notaUm = 0;

while (valorAux != 0) {

    if (valorAux >= 100) {

        valorAux -= 100;

        notaCem++;

    }

    else if (valorAux >= 50) {

        valorAux -= 50;

        notaCinquenta++;

    }

    else if (valorAux >= 20) {

        valorAux -= 20;

        notaVinte++;

    }

    else if (valorAux >= 10) {

        valorAux -= 10;

        notaDez++;

    }

    else if (valorAux >= 5) {

        valorAux -= 5;

        notaCinco++;

    }

    else if (valorAux >= 2) {

        valorAux -= 2;

        notaDois++;

    }

    else {

        valorAux -= 1;

        notaUm++;

    }

}

console.log(valor);

console.log(notaCem + " nota(s) de R$ 100,00");

console.log(notaCinquenta + " nota(s) de R$ 50,00");

console.log(notaVinte + " nota(s) de R$ 20,00");

console.log(notaDez + " nota(s) de R$ 10,00");

console.log(notaCinco + " nota(s) de R$ 5,00");

console.log(notaDois + " nota(s) de R$ 2,00");

console.log(notaUm + " nota(s) de R$ 1,00");