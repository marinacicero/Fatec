function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i ++){ //.length vai percorrer o vetor
        if(vetor[i] === valorBusca) return i
    }
    return -1 
}

import {nomes} from './data/vetor-nomes.mjs'
console.time("Buscando ALEXANDRE...")
console.log("Posição de ALEXANDRE:", buscaSequencial(nomes, ""))
console.timeEnd("Buscando ALEXANDRE...")









// const frutas = ['laranja', 'maçã', 'uva', 'pera', 'jabuticaba', 'limão', 'abacate']

// console.log("Posição de uva: ", buscaSequencial(frutas, "uva"))
// console.log("Posição de laranja: ", buscaSequencial(frutas, "laranja"))
// console.log("Posição de mamão: ", buscaSequencial(frutas, "mamão"))
// console.log("Posição de limão: ", buscaSequencial(frutas, "abacate"))