class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
 }

class WeightedGraph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vtx) {
    if (!this.adjList[vtx]) this.adjList[vtx] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjList[v1].push({ node: v2, weight });
    this.adjList[v2].push({ node: v1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    // Build initial state
    for (let vertex in this.adjList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    let smallest;
    let path = [];

    // As long as there is something to visit
    while(nodes.values.length) {
      // Get the current smallest value/"highest" priority
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjList[smallest]) {
          // Find neighbour node
          let nextNode = this.adjList[smallest][neighbour];

          // Calculate new distance to neighbour node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;

          if (candidate < distances[nextNeighbour]) {
            // Update new smallest distance to neighbour
            distances[nextNeighbour] = candidate;

            // Update previous - how we got to next neighbour
            previous[nextNeighbour] = smallest;

            // Enqueue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

 var graph = new WeightedGraph();
 graph.addVertex("A");
 graph.addVertex("B");
 graph.addVertex("C");
 graph.addVertex("D");
 graph.addVertex("E");
 graph.addVertex("F");

 graph.addEdge("A", "B", 4);
 graph.addEdge("A", "C", 2);
 graph.addEdge("B", "E", 3);
 graph.addEdge("C", "D", 2);
 graph.addEdge("C", "F", 4);
 graph.addEdge("D", "E", 3);
 graph.addEdge("D", "F", 1);
 graph.addEdge("E", "F", 1);

 console.log(graph.Dijkstra("A", "E"));