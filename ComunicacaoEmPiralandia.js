/*
Entrada
O arquivo contém apenas uma linha de teste que é o número encontrado (0 < n < 9999999999).

Obs.: Perceba que o número lido é muito alto para armazenar em uma variável do tipo int, logo você irá precisar utilizar o tipo long, que para a leitura e impressão em C, você deve utilizar o %llu.

Saída
Imprimir o número lido invertido. Não esqueça de imprimir a quebra de linha (\n) no final, caso contrário você receberá (Presentation Error).

 
Exemplo de Entrada	Exemplo de Saída
1234                    4321

9876543210              0123456789

*/

let n = gets();
let invertido = "";

invertido = n.split("");
invertido = invertido.reverse().join("") + "\n";

console.log(invertido);