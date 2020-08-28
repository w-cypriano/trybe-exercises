let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let arrayImp = [];
let resultado =0;
for(let i =0; i < numbers.length; i++){
    
    resultado = numbers[i] % 2;

    if(resultado === 1){
 
        arrayImp.push(numbers[i]);


        }
}

for(let i=0; i < arrayImp.length; i++){
    
   console.log(arrayImp[i]);
}


