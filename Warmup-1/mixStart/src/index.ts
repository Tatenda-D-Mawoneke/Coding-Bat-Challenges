export function mixStart(myString: string): boolean {
  const myArray = [...myString].slice(0, 3);
  const myArrayStringified = myArray.join("");
  return myArrayStringified === "mix" ? true : false;
}
