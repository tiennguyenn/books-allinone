import { dogAgeCalc } from "./dogAgeCalc";
import { describe, it, expect } from "vitest";

describe("Dog age calculator", function () {
  it("should return 7 when given 1", () => {
    const result = dogAgeCalc(1);
    expect(result).toBe(7);
  });

  it("handles invalid input", () => {
    const result = dogAgeCalc("a");
    expect(result).toBe("Invalid input");
  });
});
