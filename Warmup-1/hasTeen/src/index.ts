export function hasTeen(myArray: number[]): boolean {
  for (let number of myArray) {
    if (19 >= number && number >= 13) {
      return true;
    }
  }
  return false;
}
