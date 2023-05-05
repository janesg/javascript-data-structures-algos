export class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(key) {
        let list = this.adjacencyList[key];

        if (!list) {
            this.adjacencyList[key] = [];
            return true;
        } else {
            return false;
        }
    }

    addEdge(key1, key2, weight) {
        let edges1 = this.adjacencyList[key1];
        let edges2 = this.adjacencyList[key2];

        if (!edges1 || !edges2) {
            return false;
        } else {
            edges1.push({ vertex: key2, weight });
            edges2.push({ vertex: key1, weight });
            // Not handling possibility of duplicates
            return true;
        }
    }

    print() {
        let str = 
            Object.entries(this.adjacencyList)
                .map((entry) => `${entry[0]}: [${entry[1].map((v) => `${JSON.stringify(v)}`)}]`)
                .join(',\n');
        console.log(str);
    }
}

// A naive priority queue implementation that uses a sorted array
export class PriorityQueueNaive {
    constructor() {
        this.queue = [];
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    enqueue(val, priority) {
        this.queue.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}
