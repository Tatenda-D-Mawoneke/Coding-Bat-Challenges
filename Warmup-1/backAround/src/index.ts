export function backAround(myString: string): string {
  const stringArray = [...myString];
  const myChar = stringArray[stringArray.length - 1];
  stringArray.splice(0, 0, myChar);
  stringArray.splice(stringArray.length - 1, 0, myChar);
  return stringArray.join("");
}
