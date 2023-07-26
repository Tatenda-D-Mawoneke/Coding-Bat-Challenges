export function loneTeen(age1: number, age2: number): boolean {
  const age1IsTeen = isTeenChecker(age1);
  const age2IsTeen = isTeenChecker(age2);

  return age1IsTeen != age2IsTeen;
}

function isTeenChecker(age: number): boolean {
  if (age >= 13 && age <= 19) {
    return true;
  } else {
    return false;
  }
}
