let angulo1 = 90;
let angulo2 = 45;
let angulo3 = 40;

if(angulo1 <=0 || angulo1 >=180){

    console.log("angulo1 invalido: Digite novamente");
}
else if( angulo2 <=0 || angulo2 >=180){

    console.log("angulo2 invalido: Digite novamente");
}

else if( angulo3 <=0 || angulo3 >=180){

    console.log("angulo3 invalido: Digite novamente");
}
else{
        let soma = angulo1 + angulo2 + angulo3;
        let resultado;

        if(soma == 180){

        resultado = true;
        console.log(resultado);
        }
        else{

        resultado = false;
        console.log(resultado);

        }
}   





