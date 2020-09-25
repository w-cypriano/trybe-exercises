

function longestWord(frase) {
    
    let longestWord = "";
    let vFrase=[] = frase.split(" ");
    
    for(var i = 0; i < vFrase.length; i++){
   
        if(vFrase[i].length > longestWord.length){
        longestWord = vFrase[i];
        
        }
    }
    return longestWord
};
    console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
    