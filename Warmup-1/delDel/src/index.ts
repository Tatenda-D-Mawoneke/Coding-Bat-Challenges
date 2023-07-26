export function delDel(givenInput: string): string {
  if (givenInput.includes("del", 1)) {
    return givenInput.replace("del", "");
  }
  return givenInput;
}
