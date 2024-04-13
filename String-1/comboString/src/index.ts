export function comboString(string1: string, string2: string): string {
  if(string1.length > string2.length){
    return string2+string1+string2
  }
  return string1+string2+string1
}
