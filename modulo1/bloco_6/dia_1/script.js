let lEst =0;

//lEst=document.getElementById("estado");
let tEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

for(let i=0; i< tEstados.length;i +=1){

    lEst=document.createElement("option");
    lEst.value= tEstados[i];
    document.getElementById("estado").appendChild(lEst); // chama a id "estado" e passa os "option"
    
    


}
