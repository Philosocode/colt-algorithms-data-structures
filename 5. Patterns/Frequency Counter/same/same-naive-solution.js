function same(arr1, arr2) {
  // If arrays don't have same lengths, fail
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate through arrays
  for (let i = 0; i < arr1.length; i++) {
    // Get element from arr1
    // Check if there is a squared equivalent in arr2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    // If no squared equivalent (e.g. 2 -> 4), fail
    if (correctIndex === -1) {
      return false;
    }

    // Remove the element from arr2
    arr2.splice(correctIndex, 1);
  }

  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
