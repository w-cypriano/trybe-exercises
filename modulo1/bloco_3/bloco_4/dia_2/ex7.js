let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let nMenor= numbers[0];

//console.log(nMenor);

for(let i=0; i < numbers.length; i++){

            if(nMenor > numbers[i])
        {
            nMenor= numbers[i];

        }
       
        
}

console.log("O valor menor é: " + nMenor);
