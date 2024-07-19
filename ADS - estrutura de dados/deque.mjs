export default class Deque{
    #data

    constructor(){
        this.#data = []
    }

    insertFront(val){
        this.#data.unshift(val) // inserir no inicio
    }

    insertBack(val){
        this.#data.push(val) // final da fila
    }

    removeFront(){
        return this.#data.shift()
    }

    removeBack(){
        return this.#data.pop()
    }

peekFront(){
    return this.#data[0]
}

peekBack(){
    return this.#data[this.#data.length -1]
}

get isEmpty(){
    return this.#data.length === 0
}

print(){
    let output = '[ '
    for(let i = 0; i< this.#data.length; i++){
        if(output !== '[ ') output += ', '
        output += `(${i}): ${this.#data[i]}`
    }
    return output + ' ]'
}   
}