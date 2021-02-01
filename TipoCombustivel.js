//continue a solução

let alcool = 0;
let gasolina = 0;
let diesel = 0;
let code = 0;

while (code != 4) {
    code = Number(gets());

    switch (code) {
        case 1:
            alcool++;
            break;
        case 2:
            gasolina++;
            break;
        case 3:
            diesel++;
            break;
        case 4:
            break;
    }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);