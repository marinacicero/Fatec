import Queue from "./queue.mjs";

let fila = new Queue()
fila.enqueue('alexandre')
fila.enqueue('alex')
fila.enqueue('andre')
fila.enqueue('amanda')

let atendido = fila.dequeue() 
console.log({atendido})
console.log(fila.print())
let proximo = fila.peek()
console.log({proximo})