function collectOddValues(arr) {
	// Create ARR to store odd values
	let result = [];
	
	// Inner Function that adds onto result
  function helper(helperInput) {
		// Base Case
		if (helperInput.length === 0) return;
		
		// If currentEL is odd, add it to result
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
		}
		
		// Decrease input & call helper again
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
