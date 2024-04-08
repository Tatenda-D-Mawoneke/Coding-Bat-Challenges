export function startOz(givenInput: string): string {
  const firstCharacter = givenInput[0];
  const secondCharacter = givenInput[1];
  let myString = "";

  if (firstCharacter == "o") {
    myString = "o";
  }
  if (secondCharacter == "z") {
    myString = myString + "z";
  }

  return myString;
}
