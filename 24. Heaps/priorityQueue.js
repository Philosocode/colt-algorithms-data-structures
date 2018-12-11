class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);

    // When adding a Node, push it to the end and then bubble it up
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    // Start @ last Node
    let idx = this.values.length - 1;
    const element = this.values[idx];
    
    // Move from end to beginning
    while (idx > 0) {
      // Parent = (idx-1) // 2
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // If EL is not as important as the parent, then stop
      if (element.priority >= parent.priority) break;

      // Otherwise, swap Element (Child) & Parent
      this.values[parentIdx] = element;
      this.values[idx] = parent;

      // New child is now at the parent's idx
      idx = parentIdx;
    }
  }

  dequeue() {
    // Min is at the beginning
    const min = this.values[0];
    const end = this.values.pop();

    // If there are Nodes, the "end" refers to the first/min Node
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    // Get the root EL and length of heap
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      // Get children
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;

      // Swap will store the EL to swap curr Node with
      let swap = null;

      // Only assign if not out of range
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        // If left is more important, set as the swap
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        // Assign right if it exists
        rightChild = this.values[rightChildIdx];

        if (
          // If no swap and right is more important than curr,
          (!swap && rightChild.priority < element.priority) ||
          // Or if swap and right is more important than left
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
