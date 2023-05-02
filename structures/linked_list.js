class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // Big O (1)
    push(val) {
        let newNode = new Node(val);

        if (!this.tail) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    // Big O (n)
    pop() {
        if (this.head) {
            // If only 1 node, reinitialise empty list
            if (this.length === 1) {
                this.head = null;
                this.tail = this.head;
                this.length = 0;
            } else {
                let n = this.head;
                let newTail = n;
                // Find the last node
                while (n.next) {
                    newTail = n;
                    n = n.next;
                }

                // newTail holds ref to node before the tail
                this.tail = newTail;
                this.tail.next = null;
                this.length--;
            }
        }

        return this;
    }

    // Big O (1)
    shift() {
        if (this.head) {
            // If only 1 node, reinitialise empty list
            if (this.length === 1) {
                this.head = null;
                this.tail = this.head;
                this.length = 0;
            } else {
                this.head = this.head.next;
                this.length--;
            }
        }

        return this;
    }

    // Big O (1)
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    // Big O (n)
    get(idx) {
        if (idx < 0 || idx > this.length) {
            return null;
        }

        let n = this.head;

        for (let i = 0; i < idx; i++) {
            n = n.next;
        }

        // console.log(n);
        return n;
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
            // Get the node prior to the idx given
            let prior = this.get(idx - 1);
            let n = prior.next;

            newNode.next = n;
            prior.next = newNode;
            this.length++;
        }

        return true;
    }

    // Big O (n)
    remove(idx) {
        if (idx < 0 || idx > this.length) {
            return false;
        }

        if (idx === 0) {
            this.shift();
        } else if (idx === this.length - 1) {
            this.pop();
        } else {
            // Get the node prior to the idx given
            let prior = this.get(idx - 1);
            prior.next = prior.next.next;

            this.length--;
        }

        return true;
    }

    // Big O (n)
    reverse() {
        // Only need to do anything if we have at least 2 nodes
        if (this.length > 1) {
            // Start by swapping head and tail
            let node = this.head;
            this.head = this.tail;
            this.tail = node;

            // So that tail.next ends up null
            let prev = null;

            for (let i = 0; i < this.length; i++) {
                // Adjust node.next
                let next = node.next;
                node.next = prev;

                // Adjust node
                prev = node;
                node = next;
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

let list = new LinkedList();
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

