export function delDel(myString: string): string {
  const mySubString = myString[1] + myString[2] + myString[3];

  if (mySubString == "del") {
    return myString.replace("del", "");
  }
  return myString;
}
