/*

Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the
longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6


Time Complexity - O(n)

*/

function findLongestSubstring(str) {
  let maxLen = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]] + 1) {
      start = Math.max(start, seen[str[i]] + 1);
    }

    maxLen = Math.max(maxLen, i - start + 1);

    seen[str[i]] = i;
  }

  return maxLen;
}

// TESTING

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
