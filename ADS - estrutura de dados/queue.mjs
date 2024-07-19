export default class Queue {

    #data

    constructor(){
        this.#data = []
    }


enqueue(val){
    this.#data.push(val)
}

dequeue(){
    return this.#data.shift()
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