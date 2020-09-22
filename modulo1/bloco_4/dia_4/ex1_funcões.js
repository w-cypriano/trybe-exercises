function Cpalindrome(str){

    
    let rever= str.split('').reverse().join('');
    
    
    if(str === rever){

        return true;
        

    }
    else{
         return false;
    }

    // console.log(resp);
}


let resp = Cpalindrome("arara");
console.log(resp);
