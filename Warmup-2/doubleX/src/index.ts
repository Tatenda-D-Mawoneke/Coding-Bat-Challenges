// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// doubleX("axxbb") → true
// doubleX("axaxax") → false
// doubleX("xxxxx") → true

export function doubleX(word: string): boolean {
  let doubleXFound = false;
  const wordArray = [...word];
  wordArray.forEach(function (char, index) {
    if (char == "x") {
      if (wordArray[index + 1] == "x") {
        doubleXFound = true;
        return doubleXFound;
      }
    }
  });
  return doubleXFound;
}
