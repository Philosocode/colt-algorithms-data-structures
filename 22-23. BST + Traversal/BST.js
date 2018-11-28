class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;

    while (true) {
      if (value === curr.value) return;
      if (value < curr.value) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        } else {
          curr = curr.left;
        }
      } else if (value > curr.value) {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        } else {
          curr = curr.right;
        }
      }
    }
  }


  find(value) {
    if (!this.root) return false;

    let curr = this.root;
    let found = false;

    while (curr && !found) {
      if (value === curr.value) {
        found = true;
      } else if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      }
    }

    if (!found) return;

    return curr;
  }
  contains(value) {
    if (!this.root) return false;

    let current = this.root
    let found = false;

    while (current && !found) {
        if (value < current.value) {
            current = current.left;
        } else if (value > current.value) {
            current = current.right;
        } else {
            return true;
        }
    }
    return false;
  }

  BFS() {
    const queue = [];
    const visited = [];
    let node = this.root;

    // Add Root to Queue
    queue.push(node);

    // Loop
    while (queue.length > 0) {
      node = queue.shift();
      visited.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  DFSPreOrder() {
    const visited = [];

    function traverse(node) {
      visited.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }

  // DFSPreOrder(node = this.root) {
  //   const data = [node.value];

  //   if (node.left) data.push(...this.DFSPreOrder(node.left));
  //   if (node.right) data.push(...this.DFSPreOrder(node.right));

  //   return data;
  // }

  DFSPostOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      visited.push(node.value);
    }

    traverse(this.root);

    return visited;
  }

  DFSInOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      visited.push(node.value);
      
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }
}

const BST = new BinarySearchTree();
BST.insert(1);
BST.insert(2);
BST.insert(3);
BST.insert(4);
BST.insert(5);
console.log(BST.DFSPreOrder());