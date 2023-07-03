export function startHi(myString: string): boolean {
  const stringArray = [...myString];
  return stringArray[0] == "h" && stringArray[1] == "i" ? true : false;
}
