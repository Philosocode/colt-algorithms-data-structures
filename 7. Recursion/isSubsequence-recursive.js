function isSubsequence(str1, str2) {
	// If all chars of str1 in str2, return true
	if(str1.length === 0) return true

	// If str1 has chars remaining but no more str2 chars, return false
  if(str2.length === 0) return false

  // If chars are equal, call the function & remove first chars from both strings
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  

  // Else, get subsequence and remove 1 char from str2
  return isSubsequence(str1, str2.slice(1))
}