export function mixStart(myString: string): boolean {
  const myArray = [...myString].slice(1, 3);
  const myArrayStringified = myArray.join("");
  return myArrayStringified === "ix" ? true : false;
}
