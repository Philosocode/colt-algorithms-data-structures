class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    this.values.push(value);

    let idx = values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
 
    while (values[idx] > values[parentIdx]) {
        [values[idx], values[parentIdx]] = [values[parentIdx], values[idx]];
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
    }
 
    return this;
  }

  extractMax() {
    // Swap root with last EL
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    const arrLen = this.values.length;
    let currentEl = this.values[0];
    let idx = 0;

    while (true) {
      let leftChild, rightChild;
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swap;

      if (leftChildIdx < arrLen) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > currentEl) swap = leftChildIdx;
      }
      if (rightChildIdx < arrLen) {
        rightChild = this.values[rightChildIdx];
        if ((!swap && rightChild > currentEl) || (swap && rightChild > leftChild )) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = currentEl;
      idx = swap;
    }

  }
}

const heap = new MaxBinaryHeap();
heap.insert(99);
heap.insert(2);
heap.insert(3);
heap.insert(10000);
console.log(heap.values);
