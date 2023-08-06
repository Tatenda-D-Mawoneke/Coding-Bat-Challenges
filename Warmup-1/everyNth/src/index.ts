export function everyNth(myString: string, n: number): string {
  let newString = "";
  for (let i = 0; i < myString.length; i += n) {
    newString += myString[i];
  }
  return newString;
}
