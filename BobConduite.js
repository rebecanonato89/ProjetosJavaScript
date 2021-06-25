let line = gets(); 

const cases = Number(line);
for (let i = 0; i < cases; i ++   ) {
  const str = gets();
 
  const [r1, r2] = str.split(" ").map( e =>  Number(e));
  const d = r1 * 2 + r2 * 2;
  const r =  d/2;

  console.log(r);
}


