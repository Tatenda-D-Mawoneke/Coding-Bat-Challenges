// Return true if the given string contains between 1 and 3 'e' chars.

// stringE("Hello") → true
// stringE("Heelle") → true
// stringE("Heelele") → false

export function stringE(myString: string): boolean {
  let numofE = 0;
  for (const character of myString) {
    if (character == "e") numofE++;
  }
  return numofE >= 1 && numofE <= 3;
}
