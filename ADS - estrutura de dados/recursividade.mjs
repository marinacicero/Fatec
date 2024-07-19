function fatorialRec(n){
    if(n<=1){
        return 1 // condicao de saida
    }
    return n * fatorialRec(n - 1)
}
console.log('Fatorial Recursivo de 5')