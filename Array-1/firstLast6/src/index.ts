export function firstLast6(myArray: number[]): boolean {
  return myArray[0] == 6 || myArray[myArray.length - 1] == 6 ? true : false;
}
