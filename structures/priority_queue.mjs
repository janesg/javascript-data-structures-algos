class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

// Uses a MinBinaryHeap : based on priority (where priority of 1 is the highest)
export class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(val, priority = 1) {
        let newNode = new Node(val, priority);

        // Push to end of the queue
        this.queue.push(newNode);

        // Now bubble-up to correct position
        let idx = this.queue.length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if (this.queue[parentIdx].priority > newNode.priority) {
                // Swap the 2 nodes
                this.queue[idx] = this.queue[parentIdx];
                this.queue[parentIdx] = newNode;
                idx = parentIdx;
            } else {
                break;
            }
        }

        let str = this.queue.map((node) => `${node.value}:(${node.priority})`).join(', ');

        console.log(`Queued ${val}:(${priority}) => Queue: [${str}]`);
        return this.queue;
    }

    dequeue() {
        if (this.queue.length === 0) {
            return undefined;
        }

        // Get the highest priority item from the queue which is always the first value 
        let highestPriority = this.queue[0];
        let poppedNode = this.queue.pop();
        
        // No further processing required if we popped the only node
        if (this.queue.length > 0) {
            // Overwrite the first value with the popped node
            this.queue[0] = poppedNode;

            // Trickle down the new first node until it reachs the correct place 
            // in priority queue based on the node's priority
            this.trickleDown();
        }

        let str = this.queue.map((node) => `${node.value}:(${node.priority})`).join(', ');

        console.log(`Dequeued ${highestPriority.value}:(${highestPriority.priority}) => Queue: [${str}]`);
        return highestPriority;
    }

    trickleDown() {
        let idx = 0;
        let node = this.queue[0];

        while (true) {
            // Find the child indices
            let leftChildIdx = (2 * idx) + 1;
            let rightChildIdx = leftChildIdx + 1;

            let leftChild = 
                leftChildIdx < this.queue.length ? this.queue[leftChildIdx] : null;

            let rightChild = 
                rightChildIdx < this.queue.length ? this.queue[rightChildIdx] : null;

            let swapIdx = null;

            // We have to swap with the smaller of the left and right children
            // Explicitly check for null rather than using truthy as value of zero is falsey
            if (leftChild !== null && rightChild !== null) {
                if (leftChild.priority < rightChild.priority) {
                    if (leftChild.priority < node.priority) {
                        swapIdx = leftChildIdx;
                    }
                } else {
                    if (rightChild.priority < node.priority) {
                        swapIdx = rightChildIdx;
                    }
                }
            } else if (leftChild !== null) {
                if (leftChild.priority < node.priority) {
                    swapIdx = leftChildIdx;
                }
            } else if (rightChild !== null) {
                if (rightChild.priority < node.priority) {
                    swapIdx = rightChildIdx;
                }
            }

            // Finish if we never found a node to swap with
            if (!swapIdx) {
                break;
            } else {
                this.queue[idx] = this.queue[swapIdx];
                this.queue[swapIdx] = node;
            }

            idx = swapIdx;
        }
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// let queue = new PriorityQueue();
// queue.enqueue("Man City", 3);
// queue.enqueue("Wolves", 5);
// queue.enqueue("Spurs", 7);
// queue.enqueue("Newcastle", 2);
// queue.enqueue("Man Utd", 3);
// queue.enqueue("Arsenal");
// queue.enqueue("Chelsea", 5);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();