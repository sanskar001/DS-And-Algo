/*

Example 1:

Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
Example 2:

Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"
*/

var replaceWords = function (dictionary, sentence) {
  let result = sentence;
  dictionary.forEach((dict) => {
    const regex = new RegExp("^" + dict + "\\w+$", "gi");
    result = result.replace(regex, dict);
    console.log({ regex, result });
  });

  return result;
};

console.log(
  replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
);

console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"));
