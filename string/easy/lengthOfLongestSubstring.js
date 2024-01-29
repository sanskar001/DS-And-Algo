// Longest Substring Without Repeating Characters

/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.


Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

function lengthOfLongestSubstring(str) {
  if (str.length === 1) {
    return 1;
  }

  const memory = {};
  let start = 0;
  let len = 0;
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] in memory && memory[str[i]] >= start) {
      // setting unique character substring length and maxLength.
      len = i - start;
      maxLen = maxLen < len ? len : maxLen;

      // updating start position of next substring
      start = memory[str[i]] + 1;
    }
    // updating memory with new index value that character
    memory[str[i]] = i;
  }

  // setting unique character substring length and maxLength.
  len = str.length - start;
  maxLen = maxLen < len ? len : maxLen;

  return maxLen;
}

// --------------------------------------------------

// Testing

console.log(lengthOfLongestSubstring("abcadcb"));
console.log(lengthOfLongestSubstring("aaab"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
