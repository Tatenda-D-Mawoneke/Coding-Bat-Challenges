export function missingChar(myString: string, n: number): string {
  const stringArray = [...myString];
  stringArray.splice(n, 1);
  return stringArray.join("");
}
