
function indMaior(array){
    let maior= array[0];
    let resp=0;

     for(let i=0; i < array.length; i += 1){

        if(maior < array[i+1]){
            maior= array[i+1]
            resp = i+1;
        
        }
    }


    console.log(resp);
}

let array =[2,3,6,7,10,1];
indMaior(array);
