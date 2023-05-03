class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Big O (1)
    // Enqueue after last node
    enqueue(val) {
        let newNode = new Node(val);

        // Add new node as the last element
        if (!this.last) {
            this.last = newNode;
            this.first = this.last;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;

        console.log(`${val} : ${this.size}`);
        return this.size;
    }

    // Big O (1)
    // Dequeue the first node
    dequeue() {
        if (this.size === 0) {
            return null;
        }

        // Remove the first node
        let dequeuedNode = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = this.first;
            this.size = 0;
        } else {
            this.first = dequeuedNode.next;
            dequeuedNode.next = null;
            this.size--;
        }

        console.log(`${dequeuedNode.val} : ${this.size}`);
        return dequeuedNode.val;
    }
}

let queue = new Queue();
queue.enqueue(123);
queue.enqueue(456);
queue.enqueue(789);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
