function resultado ( nota){
    if(nota >= 6 ){
        console.log("Aprovado com nota" + nota)
    }
    else if (nota >= 3 && nota<6 ){
        console.log("Recuperação")
    }
    else {
        console.log("Reprovado")
    }
}