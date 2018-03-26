// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor (head = null) {
        this.head = head
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        // my implementation
        // function getNext(nextNode, counter=0) {
        //     if (nextNode) {
        //         counter++;
        //         getNext(nextNode.next, counter);
        //     }
        //     return counter
        // }
        //
        // return getNext(this.head.next)

        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next;
        }
        return counter
    }

    getFirst() {
        // return this.head;
        return this.getAt(0);
    }

    getLast() {
        // let lastNode = this.head;
        //
        // while(lastNode.next) {
        //     lastNode = lastNode.next;
        // }
        //
        // return lastNode
        return this.getAt(this.size() - 1)
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next
        }
    }

    removeLast() {
        if (!this.head){
            return
        }

        if (!this.head.next) {
            this.head = null;
            return
        }

        let previous = this.head;
        let node = this.head.next;

        while(node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
        node = null;
    }

    insertLast(data) {
        if(!this.head) {
            this.head = new Node(data);
            return
        }

        let currentNode = this.head;

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = new Node(data);

        // const lastNode = this.getLast();
        //
        // if (!lastNode){
        //     this.head = new Node(data);
        //     return
        // }
        //
        // lastNode.next = new Node(data);
    }

    getAt(index) {
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node
            }

            node = node.next;
            counter++;
        }
        return null;
    }

    removeAt(index) {
        if (index === 0){
            this.removeFirst();
            return
        }
        const removeNode = this.getAt(index);
        if (!removeNode) {
            return
        }
        const previousNode = this.getAt(index - 1);
        previousNode.next = removeNode.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return
        }

        if (index === 0) {
            this.insertFirst(data);
            return
        }

        const previous = this.getAt(index - 1) || this.getLast();
        previous.next = new Node(data, previous.next);
    }

    forEach(fn) {
        let counter = 0;
        let node = this.head;

        while(node){
            fn(node, counter);
            node = node.next;
            counter++
        }
    }

    *[Symbol.iterator]() { // Cool stuff! starting with * before function means it returns a 'generator'
        let node = this.head;

        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
