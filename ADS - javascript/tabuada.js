const numeroTabuada = parseInt(prompt("Digite um número para ver a sua tabuada:"));
let resultado = "";

for (let i = 1; i <= 10; i++) {
  const resultadoMultiplicacao = numeroTabuada * i;  
  resultado += numeroTabuada + " x " + i + " = " + resultadoMultiplicacao + "<br>";
}

