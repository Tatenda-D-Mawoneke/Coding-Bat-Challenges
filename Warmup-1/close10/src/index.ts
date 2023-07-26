export function close10(input1: number, input2: number): number {
  const input1Remainder = Math.abs(10 - input1);
  const input2Remainder = Math.abs(10 - input2);
  if (input1Remainder < input2Remainder) {
    return input1;
  } else if (input2Remainder < input1Remainder) {
    return input2;
  }
  return 0;
}
