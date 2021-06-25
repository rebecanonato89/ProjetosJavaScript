let lines = gets();
lines = lines.split('\n');
lines = lines[0].split(' ');

let [a, b, c, d] = lines;

if (  b>c && d>a && (c+d) > (a+b) && c>0 && d>0 && a%2 ==0) {

 console.log("Valores aceitos");

} else {

console.log("Valores nao aceitos");

}