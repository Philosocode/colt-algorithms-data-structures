function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const counter1 = {};
  const counter2 = {};

  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }

  for (let key in counter1) {
    if (!counter2[key]) return false;
    if (!(counter1[key] === counter2[key])) return false;
  }

  return true;
}

validAnagram('anagrams', 'nagaramm')