// Dial Keypad

/*
Input: 4333355777733366677743333557777
Output: GEEKSFORGEEKS

Input : 4433555555666096667775553
Output : HELLO WORLD
*/

//------------------------------------------------------

const keyMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: [" "],
};

// Function return aplhabetic charcters on the basis of input numberKey and keyStokes length.
function keyPress(numberKey, keyStrokes) {
  const keyCharArr = keyMap[numberKey];
  const keyCharArrLen = keyCharArr.length;

  const quotient = Math.floor(keyStrokes / keyCharArrLen);
  const reminder = keyStrokes % keyCharArrLen;

  let result = "";

  if (quotient) {
    result += keyCharArr[keyCharArrLen - 1].repeat(quotient);
  }

  if (reminder) {
    result += keyCharArr[reminder - 1];
  }

  return result;
}

function dialKeypad(keypadStr) {
  let result = "";

  if (!keypadStr.length) {
    return "";
  }

  let i = 0;

  for (let j = 1; j < keypadStr.length; j++) {
    if (keypadStr[j] !== keypadStr[i]) {
      result += keyPress(keypadStr[i], j - i);
      console.log({ i, j, result });
      i = j;
    }
  }

  result += keyPress(keypadStr[i], keypadStr.length - i);

  return result;
}

// Testing

console.log(dialKeypad("4333355777733366677743333557777"));
