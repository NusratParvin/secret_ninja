// PW2.01.09 longest-common-prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function (strs) {
  strs = strs.sort();
  let ans = "";

  let f = strs[0];
  let l = strs[strs.length - 1];

  let short = Math.min(f.length, l.length);

  for (let i = 0; i < short; i++) {
    if (f.charAt(i) != l.charAt(i)) {
      return ans;
    } else {
      ans += f.charAt(i);
    }
  }
  return ans;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
