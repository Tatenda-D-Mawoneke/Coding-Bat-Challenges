export function front3(givenInput: string): string {
  return givenInput.length > 3
    ? givenInput.substring(0, 3).repeat(3)
    : givenInput.substring(0, givenInput.length).repeat(3);
}
