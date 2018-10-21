function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  // Iterate through entire string
  for (let i = 0; i < str.length; i++) {
  	// Get char
    let char = str[i];

    // If char exists, move left pointer
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // Get length of substring
    longest = Math.max(longest, i - start + 1);

    // Store index of next char so as to not double count
    seen[char] = i + 1;
  }
  
  return longest;
}