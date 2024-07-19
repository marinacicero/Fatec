//area do circulo A = Pi * R2

const raio = 5.4

const pi = 3.14159265359

const area = Math.PI * Math.pow(raio, 2) // pow elevacao 

document.getElementById("root").innerHTML = area.toFixed(2) // casas decimais