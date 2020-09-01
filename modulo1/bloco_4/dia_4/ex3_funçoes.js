
function indMaior(array){
    let menor= array[0];
    let resp=0;

     for(let i=0; i < array.length; i += 1){

        if(menor > array[i+1]){
            menor= array[i+1]
            resp = i+1;
        
        }
    }


    console.log(resp);
}

let array =[2,4,6,7,10,0,-3];
indMaior(array);
