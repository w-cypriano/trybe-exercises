let num=5;
let linha =0;

if(num > 1){

    for(let i=0; i < num; i += 1)
    {
         let res= '';

       for(let j=0; j < num; j += 1){
        
        res += '*';

       }
       console.log(res);
    }
}

 else{

    console.log("Erro: digite um numero maior que 1");
}