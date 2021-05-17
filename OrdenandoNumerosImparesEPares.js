let num = parseInt(gets());
let index = 0;

let numeros = Array(num);

while (index < num) {

    numero = parseInt(gets());

    if (numero >= 0) {
        numeros[index] = numero;
        index++;
    }

}

pares = numeros.filter(value => value % 2 == 0);
impares = numeros.filter(value => value % 2 != 0);

pares.sort((a, b) => a - b);
impares.sort((a, b) => b - a);

pares.forEach(i => console.log(i));
impares.forEach(i => console.log(i));