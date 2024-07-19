let frase = 'Socorram-me subi no onibus em Marrocos'

let vetor = []

for (let i= 0; i < frase.length; i ++){
    vetor.push(frase.charAt(i))
}

//console.log(vetor)

//vetor.unshift('X') //insere o X no começo do do vetor 

//vetor.splice(11, 1, 'W') // 11 posição onde vc quer inserir o elemento, 0 = o valor que vc quer apagar (11+1)

console.log(vetor)

let reverso = ''
while(vetor.length > 0){
    reverso += vetor.pop()

} //push 'pegou' as strings e o pop 'largou' 

console.log(reverso)