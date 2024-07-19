 class Node {
    constructor(val){
        this.data = val
        this.next = null 
    }
 }

 export default class LinkedList{
    #head
    #tail
    #count

    constructor(){
        this.#head = null
        this.#tail= null
        this.#count = 0
    }

    get isEmpty(){
        return this.#count ===0
    }
        get count(){
            return this.#count
        }
    Insert(pos, val){
        const inserted = new Node(val)
        //lista vazia:
        if(this.isEmpty){
            this.#head = inserted
            this.#tail= inserted
        }
    // inserir na primeira posição de uma lista não vazia
    else if (pos===0){
        inserted.next = this.#head
        this.#head = inserted
    } 
    // 3 caso: inserir no final da lista    
    else if (pos >= this.#count){
        this.#tail.next = inserted
        this.#tail = inserted
    }
    // 4 caso: inserir em qualquer outra posição
    else{
        let before = this.#head
        for(let i = 1; i < pos; i++){
            before = before.next
        }
        inserted.next = before.next
        before.next = inserted
    }
    }    
 }