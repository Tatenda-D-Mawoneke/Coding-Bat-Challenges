// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

import { assert } from "chai";
import { sumDouble } from "../src";

// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

describe("sumDouble", () => {
  // sumDouble(1, 2) → 3
  it("should return 3 when the values of the varibales are 1 and 2", () => {
    const result = sumDouble(1, 2);
    assert.equal(result, 3);
  });
  it("should return 5 when the values of the varibales are 3 and 2", () => {
    const result = sumDouble(3, 2);
    assert.equal(result, 5);
  });
  it("should return 8 when the values of the varibales are 2 and 2", () => {
    const result = sumDouble(2, 2);
    assert.equal(result, 8);
  });
});
