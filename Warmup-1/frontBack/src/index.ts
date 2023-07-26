export function frontBack(myString: string): string {
  const myArray = [...myString];
  const firstChar = myArray[0];
  const lastChar = myArray[myArray.length - 1];
  if (myString.length > 1) {
    myArray.splice(0, 1, lastChar);
    myArray.splice(myArray.length - 1, 1, firstChar);
  }
  return myArray.join("");
}
