export function dogAgeCalc(dogAge) {
  if (typeof dogAge !== "number") {
    return "Invalid input";
  }

  const dogHumanAge = dogAge * 7;
  return dogHumanAge;
}
