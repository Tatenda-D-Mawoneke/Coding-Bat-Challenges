// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11

export function max1020(num1: number, num2: number): number {
  if (num1 > num2) {
    if (num1 >= 10 && num1 <= 20) {
      return num1;
    }
  } else if (num2 > num1) {
    if (num2 >= 10 && num2 <= 20) {
      return num2;
    }
  }
  return 0;
}
