export function notString(myString: string): string {
  return myString.startsWith("not") ? myString : `not ${myString}`;
}
