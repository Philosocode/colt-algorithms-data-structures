// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  // [2,1] -> [1,2]
  const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // Loop through N times
  for (let i = arr.length; i > 0; i--) {
    // Since the last element will be sorted, go from beginning to i
    for (let j = 0; j < i - 1; j++) {
      // e.g. if arr[1] > arr[2], swap
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
