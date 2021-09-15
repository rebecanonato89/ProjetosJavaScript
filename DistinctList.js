function DistinctList(arr) { 

  let dup = 0;

  for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            if(arr[i]===arr[j] && i!==j){
                dup++;
                arr.splice(arr.indexOf(arr[i]), 1)
            }
        }
    }
    return dup;


}
   
// keep this function call here 
console.log(DistinctList(readline()));
