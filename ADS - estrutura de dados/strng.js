const facul = "FATEC";

document.getElementById("root").innerHTML = facul.charAt(4) // mostrar só uma parte, quinta letra
document.getElementById("root").innerHTML = facul.charAt(5) // vazio
document.getElementById("root").innerHTML = facul.charCodeAt(3) // converte para o valor da tabela binaria
document.getElementById("root").innerHTML = facul.indexOf("C") // mostra a posicao do caracter
document.getElementById("root").innerHTML = facul.substring(1) // imprimi da 1 posicao pra fente
document.getElementById("root").innerHTML = facul.substring(0, 2) // imprimi da posicao 0 a 2
document.getElementById("root").innerHTML = facul.replace("F", 2) // muda o lugar
document.getElementById("root").innerHTML = "Facauldade".concat(facul).concat(" !") // concatena os elementos
document.getElementById("root").innerHTML = "Alex,Joao,Pedro,JOse".split(",") // separa os valores

const template = `
Olá
${nome}`

const template1 = `1 +1 = $(1+1)`
//console.log(template1)

function maiuscula( m ) {
    return m.toUpperCase();
}