let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somar = 0;
let media = 0;

for(let i=0; i < numbers.length; i++){
    
    somar = somar + numbers[i];

}

media = somar / numbers.length

console.log("A média é: " + media);

