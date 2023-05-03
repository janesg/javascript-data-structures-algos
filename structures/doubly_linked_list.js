class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    // Big O (1)
    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = this.tail.next;
        }

        this.length++;

        return this;
    }

    // Big O (1)
    pop() {
        if (this.head) {
            if (this.length === 1) {
                this.head = null;
                this.tail = this.head;
                this.length = 0;
            } else {
                let poppedNode = this.tail;
                this.tail = poppedNode.prev;
                this.tail.next = null;
                // Even though now unreachable, remove ref for completeness
                poppedNode.prev = null;
                this.length--;
            }    
        }

        return this;
    }

    // Big O (1)
    shift() {
        if (this.head) {
            let shiftedNode = this.head;

            if (this.length === 1) {
                this.head = null;
                this.tail = this.head;
                this.length = 0;
            } else {
                this.head = shiftedNode.next;
                this.head.prev = null;
                // Even though now unreachable, remove ref for completeness
                shiftedNode.next = null;
                this.length--;
            }    
            return shiftedNode;
        } else {
            return undefined;
        }
    }

    // Big O (1)
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }

        return this;
    }

    // Big O (n)
    get(idx) {
        if (idx < 0 || idx > this.length - 1) {
            return undefined;
        } else {
            // Is idx closer to head or tail ?
            if (idx <= this.length / 2) {
                // Nearer the head
                let n = this.head;

                for (let i = 0; i < idx; i++) {
                    n = n.next;
                }

                return n;
            } else {
                // Nearer the tail
                let n = this.tail;

                for (let i = this.length - 1; i > idx; i--) {
                    n = n.prev;
                }    

                return n;
            }
        }
    }

    // Big O (n)
    set(idx, val) {
        let n = this.get(idx);

        if (n) {
            n.val = val;
            return true;
        } else {
            return false;
        }
    }

    // Big O (n)
    insert(idx, val) {
        if (idx < 0 || idx > this.length) {
            return false;

        }

        if (idx === 0) {
            this.unshift(val);
        } else if (idx === this.length) {
            this.push(val);
        } else {
            let newNode = new Node(val);

            // Find the node at the index before where we are inserting a new node
            let before = this.get(idx - 1);
            let after = before.next;
            // Set prev refs
            after.prev = newNode;
            newNode.prev = before;
            // Set next refs
            newNode.next = after;
            before.next = newNode;
            this.length++;
        }

        return true;
    }

    // Big O (n)
    remove(idx) {
        if (idx < 0 || idx > this.length - 1) {
            return false;
        }

        if (idx === 0) {
            this.shift();
        } else if (idx === this.length - 1) {
            this.pop();
        } else {
            // Find the node at the index before where we are removing a node
            let before = this.get(idx - 1);
            let removedNode = before.next;
            let after = removedNode.next;

            after.prev = before;
            before.next = after;

            // Remove refs from removed node
            removedNode.next = null;
            removedNode.prev = null;
            this.length--;
        }

        return true;
    }

    reverse() {
        if (this.length > 1) {
            // Swap head and tail
            let currentNode = this.head;
            this.head = this.tail;
            this.tail = currentNode;
    
            let nextNode = null;
            let prevNode = null;

            for(let i = 0; i < this.length; i++) {
                nextNode = currentNode.next;
                currentNode.next = prevNode;
                currentNode.prev = nextNode;
    
                prevNode = currentNode;
                currentNode = nextNode;
            }
        }

        return this;
    }

    print() {
        let vals = [];
        let n = this.head;
        while (n) {
            vals.push(n.val);
            n = n.next;
        }
        return vals;
    }

}

let list = new DoublyLinkedList();
list.push(23);
list.push(45);
list.push(90);
console.log(list.print());
list.pop();
console.log(list.print());
list.pop();
console.log(list.print());
list.pop();
console.log(list.print());
list.pop();
console.log(list.print());
list.push(67);
list.push(7);
list.push(88);
console.log(list.print());
list.shift();
console.log(list.print());
list.shift();
console.log(list.print());
list.shift();
console.log(list.print());
list.shift();
console.log(list.print());
list.unshift(47);
console.log(list.print());
list.unshift(11);
console.log(list.print());
list.unshift(934);
console.log(list.print());
list.get(1);
list.set(1, 244);
console.log(list.print());
list.insert(0, 1);
list.insert(4, 999);
list.insert(3, 22);
console.log(list.print());
list.remove(0);
list.remove(4);
list.remove(2);
console.log(list.print());
list.reverse();
console.log(list.print());
