//usar a stack
import Stack from "./15-pilha.mjs";
let pilha = new Stack(); //novo obj usando a estrutura do import
console.log('Esta vazia', pilha.isEmpty)


pilha.push(10)
pilha.push(50)
pilha.push(3)
pilha.push(12)
pilha.pop()
pilha.pop() // pega o ultimo push

console.log(pilha.peek())
console.log('Esta vazia?', pilha.isEmpty)
console.log(pilha.print())
