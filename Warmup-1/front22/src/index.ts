export function front22(givenInput: string): string {
  let splicedText = givenInput;
  if (givenInput.length > 1) {
    splicedText = givenInput.substring(0, 2);
  }
  return `${splicedText}${givenInput}${splicedText}`;
}
