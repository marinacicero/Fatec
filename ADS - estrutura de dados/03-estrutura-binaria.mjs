function buscaBinaria (vetor, valorBusca){

    let ini = 0
    let fim = vetor.length - 1 // -1 por que a contagem do lenght começa no 1 e binario no 0

    while (fim >= ini){
// achar a metade do valor
    let meio = Math.floor(( ini + fim) /2);
    

    if(valorBusca === vetor[meio]){
        return meio;
    }

    else if (valorBusca > vetor[meio]){
        ini = meio + 1; 
    }

    else {
        fim = meio - 1;
    }
}

    return -1;
}
   let nums =[0, 11, 22, 33, 44, 55, 66, 77, 88, 99 ]

     console.log("Posição do número 33 é: ", buscaBinaria(nums, 33))
     
     import {nomes} from './data/vetor-nomes.mjs'
    
     console.log('Posição de ALEXANDRE: ', buscaBinaria(nomes, "MARINA"))