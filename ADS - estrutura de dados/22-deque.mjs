// lista de compras
import Deque from "./deque.mjs"

let listaCompras = new Deque()
//nsole.log(listaCompras.print)
console.log("Esta vazia? ", listaCompras.isEmpty)

//alimenticio => inserir na frente
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
console.log(listaCompras.print())

listaCompras.insertBack("Sabão em pó")
listaCompras.insertBack("desodorante")
listaCompras.insertBack("Agua sanitaria")
console.log(listaCompras.print())

listaCompras.insertFront('café')
listaCompras.insertFront('açucar')
console.log(listaCompras.print())

listaCompras.insertBack("shampoo")
console.log(listaCompras.print())

let removido = listaCompras.removeBack()
console.log({removido})
console.log(listaCompras.print())

//espiadinha
let proximo = listaCompras.peekFront()
console.log({proximo})

let ultimo = listaCompras.peekBack()
console.log({ultimo})