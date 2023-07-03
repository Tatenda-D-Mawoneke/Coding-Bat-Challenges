/*
We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true
*/

import { assert } from "chai";
import { hasTeen } from "../src";

describe("hasTeen which returns true when given 3 interger values and any of them are in the range of 13-19 (inclusive) ", () => {
  it("should return true when given [13, 20, 10]", () => {
    const result = hasTeen([13, 20, 10]);
    assert.equal(result, true);
  });
  it("should return true when given [20, 19, 10]", () => {
    const result = hasTeen([20, 19, 10]);
    assert.equal(result, true);
  });
  it("should return true when given [20, 10, 13]", () => {
    const result = hasTeen([20, 10, 13]);
    assert.equal(result, true);
  });
  it("should return false when given ", () => {
    const result = hasTeen([20, 12, 30]);
    assert.equal(result, false);
  });
});
