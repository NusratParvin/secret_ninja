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
