class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }
  
  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter(vtx => vtx !== v2);
    this.adjList[v2] = this.adjList[v2].filter(vtx => vtx !== v1);
  }

  removeVertex(vertex) {
    this.adjList[vertex].forEach(adj => this.removeEdge(adj, vertex));
    delete this.adjList[vertex];
  }

  DFSRecursive(start) {
    const results = [];
    const visited = {};
    const adjList = this.adjList;

    (function DFS(vtx) {
      if (!vtx) return;

      visited[vtx] = true;
      results.push(vtx);
      
      adjList[vtx].forEach(neighbour => {
        if (!visited[neighbour]) return DFS(neighbour);
      });
    })(start);

    return results;
  }

  DFSIterative(start) {
    const stack = [start];
    const results = [];
    const visited = {};
    let currVtx;

    visited[start] = true;

    while (stack.length) {
      currVtx = stack.pop();
      results.push(vtx);

      this.adjList[currVtx].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }

    return results;
  }

  BFS(start) {
    const queue = [start];
    const results = [];
    const visited = {};
    let currVtx;

    visited[start] = true;

    while (queue.length) {
      currVtx = queue.shift();
      results.push(vtx);

      this.adjList[currVtx].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }

    return results;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");