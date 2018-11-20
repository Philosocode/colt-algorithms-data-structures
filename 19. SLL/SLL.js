class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  pop() {
    if (!this.head || !this.tail) return;

    let curr = this.head;
    let newTail = curr;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return curr;
    }

    while(curr.next) {
      newTail = curr;
      curr = curr.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    return curr;
  }

  shift() {
    if (!this.length) return;
    if (this.length === 1) this.tail = null;

    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length++;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let currNode = this.head;
    let counter = 0;

    while (counter < idx) {
      currNode = currNode.next;
      counter++;
    }

    return currNode;
  }

  set(idx, val) {
    const foundNode = this.get(idx);
    if (!foundNode) return false;

    foundNode.value = val;

    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) {
      this.unshift(val);
      return true;
    }

    if (idx === this.length) {
      this.push(val);
      return true;
    }

    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let curr = prev.next;

    prev.next = newNode;
    newNode.next = curr;

    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return;
    if (idx === this.length - 1) this.pop();
    if (idx === 0) this.shift();

    const prev = this.get(idx - 1);
    const nodeToRemove = prev.next;

    prev.next = nodeToRemove.next;
    this.length--;

    return nodeToRemove;
  }

  traverse() {
    let curr = this.head;

    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  reverse() {
    if (this.length <= 1) return;

    let prev = this.head;
    let curr = prev.next;
    let next = curr.next;

    while (next !== this.tail) {
      curr.next = prev;

      prev = curr;
      curr = next;
      next = next.next;
    }

    curr.next = prev;
    next.next = curr;

    const oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;
    this.tail.next = null;
  }
}

const list = new SLL();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.reverse();
list.traverse();