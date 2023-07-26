export function close10(input1: number, input2: number): number {
  // const input1Modulo10 = Math.abs(input1 % 10);
  // const input2Modulo10 = Math.abs(input2 % 10);
  // if (input1Modulo10 < input2Modulo10) {
  //   return input2;
  // } else if (input2Modulo10 < input1Modulo10) {
  //   return input1;
  // }
  // return 0;

  const input1Remainder = Math.abs(10 - input1);
  const input2Remainder = Math.abs(10 - input2);
  if (input1Remainder < input2Remainder) {
    return input1;
  } else if (input2Remainder < input1Remainder) {
    return input2;
  }
  return 0;
}
