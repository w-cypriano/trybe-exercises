
let nPeças= "TORRE";
nPeças = nPeças.toLocaleLowerCase();



switch (nPeças) {
    case 'peão':
        console.log(`${nPeças}: --> para frente e diagonalmente`);
        break;

    case 'cavalo':
        console.log(`${nPeças}: --> duas casas horizontalmente ou verticalmente`);
        break;

    case 'torre':
            console.log(`${nPeças}: --> horizontalmente, verticalmente`);
            break;

    case 'rei':
        console.log(`${nPeças}:  --> horizontalmente, verticalmente ou diagonalmente`);
        break;    
    case 'rainha':
        console.log(`${nPeças}: --> horizontalmente, verticalmente ou diagonalmente`);
        break;
    case 'bispo':
        console.log(`${nPeças}: --> diagonalmente`);
        break;

    default:
     console.log("ERRO: A peça digitada não existe !!!")
     
        
}

