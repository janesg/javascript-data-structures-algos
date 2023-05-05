class Graph {
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

    addEdge(key1, key2) {
        let edges1 = this.adjacencyList[key1];
        let edges2 = this.adjacencyList[key2];

        if (!edges1 || !edges2) {
            return false;
        } else {
            edges1.push(key2);
            edges2.push(key1);
            // Remove duplicates
            this.adjacencyList[key1] = [...new Set([...edges1])];
            this.adjacencyList[key2] = [...new Set([...edges2])];
            return true;
        }
    }

    removeEdge(key1, key2) {
        let edges1 = this.adjacencyList[key1];
        let edges2 = this.adjacencyList[key2];

        if (!edges1 || !edges2) {
            return false;
        } else {
            const idx1 = edges1.indexOf(key2);
            const idx2 = edges2.indexOf(key1);

            if (idx1 < 0 || idx2 < 0) {
                return false;
            } else {
                edges1.splice(idx1, 1);
                edges2.splice(idx2, 1);
                return true;
            }
        }
    }

    removeVertex(key) {
        let edgeList = this.adjacencyList[key];

        if (!edgeList) {
            return false;
        } else {
            // Take a copy as original list will be modified by removeEdge
            edgeList = [...edgeList];

            // Remove all edges for this vertex
            for (let i = 0; i < edgeList.length; i++) {
                this.removeEdge(key, edgeList[i]);
            }

            // Finally we remove the vertex itself
            delete this.adjacencyList[key];
            return true;
        }
    }

    depthFirstTraversalRecursive(start) {
        const result = [];
        const visited = {};
        
        // Handle fact that 'this' inside inner function will be different
        const adjacencyList = this.adjacencyList;

        // Define and immediately call it with the start vertex
        (function helper(vertex) {
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(adjacent => {
                if (!visited[adjacent]) {
                    return helper(adjacent);
                }
            });
        })(start);

        return result;
    }

    depthFirstTraversalIterative(start) {
        const result = [];
        const visited = {};     // Records which vertices have been pushed onto the stack
        const stack = [];

        stack.push(start);
        visited[start] = true;

        while (stack.length > 0) {
            let vertex = stack.pop();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(adjacent => {
                if (!visited[adjacent]) {
                    stack.push(adjacent)    
                    visited[adjacent] = true;
                }
            });
        }

        return result;
    }

    breadthFirstTraversal(start) {
        const result = [];
        const visited = {};     // Records which vertices have been pushed onto the queue
        const queue = [];

        queue.push(start);
        visited[start] = true;

        while (queue.length > 0) {
            let vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(adjacent => {
                if (!visited[adjacent]) {
                    queue.push(adjacent)    
                    visited[adjacent] = true;
                }
            });
        }

        return result;
    }

    print() {
        let str = Object.entries(this.adjacencyList).map((entry) => `${entry[0]}: [${entry[1]}]`).join(', ');
        console.log(str);
    }
}

// Basic functionality testing
// let graph = new Graph();
// console.log(graph.addVertex('London'));
// graph.print();
// console.log(graph.addVertex('Hong Kong'));
// graph.print();
// console.log(graph.addVertex('London'));
// graph.print();
// console.log(graph.addVertex('New York'));
// graph.print();
// console.log(graph.addVertex('Delhi'));
// graph.print();
// console.log(graph.addEdge('Paris', 'Hong Kong'));
// graph.print();
// console.log(graph.addEdge('London', 'Hong Kong'));
// graph.print();
// console.log(graph.addEdge('Delhi', 'Hong Kong'));
// graph.print();
// console.log(graph.addEdge('London', 'New York'));
// graph.print();
// console.log(graph.addEdge('Hong Kong', 'New York'));
// graph.print();
// console.log(graph.removeEdge('Hong Kong', 'Delhi'));
// graph.print();
// console.log(graph.removeVertex('London'));
// graph.print();
// console.log(graph.removeVertex('Oslo'));
// graph.print();

// Graph traversal testing using this graph:

//          A
//      /       \
//      B       C
//      |       |
//      D ----- E
//      \       /
//          F

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.print();

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
graph.print();

console.log(`Depth First (Recursive) : ${graph.depthFirstTraversalRecursive('A')}`);
console.log(`Depth First (Iterative) : ${graph.depthFirstTraversalIterative('A')}`);
console.log(`Breadth First : ${graph.breadthFirstTraversal('A')}`);
