class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Big O (1)
    push(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.size++;

        console.log(`${val} : ${this.size}`);
        return this.size;
    }

    // Big O (1)
    pop() {
        if (this.size === 0) {
            return null;
        }

        let poppedNode = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = this.first;
            this.size = 0;
        } else {
            this.first = poppedNode.next;
            poppedNode.next = null;
            this.size--;
        }

        console.log(`${poppedNode.val} : ${this.size}`);
        return poppedNode.val;
    }
}

let stack = new Stack();
stack.push(123);
stack.push(456);
stack.push(789);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
