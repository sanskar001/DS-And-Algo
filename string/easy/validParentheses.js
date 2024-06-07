// Valid Parentheses

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

// TIME COMPLEXITY - O(N) AND SPACE COMPLEXITY - O(N)

function validParentheses(str) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const parnethesesObj = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const strArr = [...str];
  const strStack = [];

  for (let i = 0; i < str.length; i++) {
    const poppedValue = strArr.pop();

    if (
      strStack.length &&
      parnethesesObj[poppedValue] === strStack[strStack.length - 1]
    ) {
      strStack.pop();
    } else {
      strStack.push(poppedValue);
    }
  }

  return strStack.length === 0;
}

console.log(validParentheses("[{()}()]"));
console.log(validParentheses(""));
console.log(validParentheses("("));
console.log(validParentheses("((]"));
