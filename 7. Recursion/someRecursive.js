// Return true if cb(arr[el]) returns true
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb) {
  if (!arr.length) return false;
  if (cb(arr[0])) return true;

  return someRecursive(arr.slice(1), cb);
}
