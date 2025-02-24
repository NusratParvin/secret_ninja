// PW2.01.10 valid-parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const map = {
  "(": ")",
  "{": "}",
  "[": "]",
};
const isValid = (s) => {
  let i = 0;
  let answer = [];
  while (i <= s.length) {
    if (s[i] in map) {
      answer.push(s[i]);
    } else if (map[answer.pop()] !== s[i]) {
      return false;
    }

    i++;
  }
  return true;
};

const s = "[";
console.log(isValid(s));
