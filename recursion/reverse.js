/*

reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

*/

function reverse(str) {
  if (str.length === 0) {
    return "";
  }

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

// Testing

console.log(reverse("hello there"));
