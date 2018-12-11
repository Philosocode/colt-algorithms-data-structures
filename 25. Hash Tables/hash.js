class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    // Hash the key
    const idx = this._hash(key);

    // Store K-V pair in an Array (separate chaining)
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }

    this.keyMap[idx].push([key, value]);
  }

  get(key) {
    // Hash key
    const idx = this._hash(key);

    // Check 1: Element doesn't exist
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] == key) {
          return this.keyMap[idx][i][1];
        }
      }
    }
    return;
  }

  keys() {
    const keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }

    return keysArr;
  }

  values() {
    const valuesArr = [];

    for(let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }

    return Array.from(new Set(valuesArr));
  }
}

const HT = new HashTable(17);
HT.set("Hello World", 1234);
HT.set("Goodbye World", 4321);
console.log(HT.values());
console.log(HT.keys());