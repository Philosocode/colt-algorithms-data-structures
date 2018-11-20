class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length <= 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldTail = this.tail;

      oldTail.next = newNode;
      newNode.prev = oldTail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.head) return;
    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return;

    const mid = Math.floor(this.length / 2);
    let curr, count;

    if (idx <= mid) {
      // Start at the beginning and move forward
      count = 0;
      curr =  this.head;

      while (count < idx) {
        curr = curr.next;
        count++;
      }
    } else {
      // Start from the end and move backward
      count = this.length - 1;
      curr = this.tail;

      while (count > idx) {
        curr = curr.prev;
        count--;
      }
    }

    return curr;
  }

  set(idx, val) {
    const node = this.get(idx);

    if (node) {
      node.value = val;

      return true;
    }

    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length - 1) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(idx - 1);
    const afterNode = beforeNode.next;
    
    newNode.next = afterNode;
    afterNode.prev = newNode;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    this.length++;

    return true;
  }

  remove(idx) {
    if ( idx < 0 || idx >= this.length) return;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const found = this.get(idx);
    const prev = found.prev;
    const next = found.next;

    prev.next = next;
    next.prev = prev;

    found.next = null;
    found.prev = null;

    this.length--;

    return found;
  }

  reverse() {
    
  }
}

const listy = new DLL();
listy.push(1);
listy.push(2);
listy.push(3);
listy.push(4);
listy.push(5);
console.log(listy.get(0));