function mergeSort(vetor){

    //para ser divido, um vetor precisa ter pelo menos 2 elementos
    if(vetor.length < 2) return vetor

    //achar o meio (aproximado) do vetor
    let meio = Math.floor(vetor.length / 2)

    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio)

    // console.log({vetEsq, vetDir})
    
    //Chamadas recursivas ao mergeSort
    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    
    let posEsq = 0
    let posDir = 0
    let vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(vetEsq[posEsq] < vetDir[posDir]){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    let sobra

    if(posEsq < posDir){
        sobra = vetEsq.slice(posEsq)
    }else{
        sobra = vetDir.slice(posDir)
    }
    // console.log({sobra})
    return [ ...vetRes, ...sobra ]
}

// let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

// let numsOrd = mergeSort(nums)

// console.log({numsOrd})

import { nomes } from "./data/nomes-desord.mjs"

let nomesOrd = mergeSort(nomes)
console.log(nomesOrd)