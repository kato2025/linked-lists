class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
        this.displayOperation('append', value);
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
        this.displayOperation('prepend', value);
    }

    getSize() {
        this.displayOperation('size', this.size);
        return this.size;
    }

    getHead() {
        this.displayOperation('head', this.head ? this.head.value : null);
        return this.head;
    }

    getTail() {
        this.displayOperation('tail', this.tail ? this.tail.value : null);
        return this.tail;
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            this.displayOperation('at', `Index ${index} out of range`);
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        this.displayOperation('at', currentNode.value);
        return currentNode;
    }

    pop() {
        if (this.size === 0) {
            this.displayOperation('pop', 'List is empty');
            return null;
        }
        let deletedNode = this.tail;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode !== this.tail) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = null;
            this.tail = currentNode;
        }
        this.size--;
        this.displayOperation('pop', deletedNode.value);
        return deletedNode;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                this.displayOperation('contains', true);
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        this.displayOperation('contains', false);
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                this.displayOperation('find', index);
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        this.displayOperation('find', null);
        return null;
    }

    // Function to represent the linked list as a string
    toString() {
        let result = '';
        let currentNode = this.head;
        while (currentNode !== null) {
            result += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }

    // Function to display the operation and its result
    displayOperation(operation, result) {
        console.log(`${operation}:`, result);
        console.log('Linked List:', this.toString());
        console.log('-------------------');
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
console.log('Initial Linked List:');
console.log('-------------------');
console.log(linkedList.toString());
console.log('-------------------');
linkedList.getSize();
linkedList.getHead();
linkedList.getTail();
linkedList.at(1);
linkedList.pop();
linkedList.contains(2);
linkedList.find(1);
