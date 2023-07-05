import { assert } from "chai";
import { firstLast6 } from "../src";

/*

Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false

*/
describe("firstLast6", () => {
  it("should return true if 6 is the last element in the array", () => {
    const result = firstLast6([1, 2, 6]);
    assert.deepEqual(result, true);
  });
  it("should return true if 6 is the first element in the array", () => {
    const result = firstLast6([6, 1, 2, 3]);
    assert.deepEqual(result, true);
  });
  it("should return false if 6 is not the first or last element in an array", () => {
    const result = firstLast6([13, 6, 1, 2, 3]);
    assert.deepEqual(result, false);
  });
});
