import { WeightedGraph, PriorityQueueNaive } from './weighted_graph.mjs';
import { PriorityQueue } from './priority_queue.mjs';

function dijkstra(graph, start, end) {
    const distances = {};
    const previous = {};
    // const nodes = new PriorityQueueNaive();
    const nodes = new PriorityQueue();

    // Build up initial state
    for (let vertex in graph.adjacencyList) {
        distances[vertex] = (vertex === start) ? 0 : Infinity;
        previous[vertex] = null;
        nodes.enqueue(vertex, (vertex === start) ? 0 : Infinity);
    }

    let shortestPath = [];

    while (!nodes.isEmpty()) {
        // Priority queue always dequeues the element with smallest priority
        // let { val: minNode } = nodes.dequeue();
        let { value: minNode } = nodes.dequeue();

        // This is our completion conditional
        if (minNode === end) {
            let node = minNode;
            while (previous[node]) {
                shortestPath.push(node);
                node = previous[node];
            }
            
            // Add the start node to the path and then reverse it to give final route
            shortestPath.push(node);

            return shortestPath.reverse();
        }

        // Loop through adjacency list for that node
        if (minNode || distances[minNode] !== Infinity) {
            for (let adjacent in graph.adjacencyList[minNode]) {
                let nextNode = graph.adjacencyList[minNode][adjacent];

                // Calculate new distance to adjacent node
                let distance = distances[minNode] + nextNode.weight;

                if (distance < distances[nextNode.vertex]) {
                    // Updating new smallest distance to adjacent
                    distances[nextNode.vertex] = distance;
                    // Updating record of which node we 'travelled' from to get to adjacent
                    previous[nextNode.vertex] = minNode;
                    // Enqueue adjacent with new priority
                    nodes.enqueue(nextNode.vertex, distance);
                }
            }
        }
    }

}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
graph.print();

console.log(dijkstra(graph, 'A', 'E'));