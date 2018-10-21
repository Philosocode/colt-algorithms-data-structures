function maxSubArraySum(arr, num) {
  // Number must be less than ARR.length
  if (arr.length < num) return null;

  // Set max to lowest possible value
  var max = -Infinity;

  // Loop through the ARR
  for (let i = 0; i < arr.length; i++) {
    // Use 'temp' to store the current sum
    temp = 0;

    // Start summing numbers
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    // Get the new max
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}
