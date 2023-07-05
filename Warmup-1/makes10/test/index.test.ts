/*

Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.


makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true
*/

import { assert } from "chai";
import { makes10 } from "../src";

describe("makes10", () => {
  it("should return true, when given inputs '9' and '10'", () => {
    const result = makes10(9, 10);
    assert.equal(result, true);
  });
  it("should return false, when given inputs '9' and '9'", () => {
    const result = makes10(9, 9);
    assert.equal(result, false);
  });
  it("should return true, when given inputs '1' and '9'", () => {
    const result = makes10(1, 9);
    assert.equal(result, true);
  });
});
