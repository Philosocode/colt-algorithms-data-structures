function same(arr1, arr2) {
  // If arrays are not same length, fail
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Create counters for each array
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // Store values and their frequencies in counter
  // e.g. {1:1 time, 2:1 time, 3:5 times }
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // Get each key (value) in arr1
  for (let key in frequencyCounter1) {
    // Check for squared value in arr2
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    
    // Check for same frequency in both arrays
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
