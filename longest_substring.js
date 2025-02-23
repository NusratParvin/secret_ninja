// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function (s) {
  let strLen = 0;
  let left = 0;
  let right = 0;
  let subset = new Set();

  while (right < s.length) {
    if (subset.has(s[right])) {
      subset.delete(s[left]);
      left++;
    } else {
      subset.add(s[right]);
      strLen = Math.max(strLen, subset.size);
      right++;
    }
  }
  //   console.log(strLen);
  return strLen;
};

const s = "pwwkew";
console.log(lengthOfLongestSubstring(s)); // Output: 3
