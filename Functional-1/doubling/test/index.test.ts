/*

Given a list of integers, return a list where each integer is multiplied by 2.


doubling([1, 2, 3]) → [2, 4, 6]
doubling([6, 8, 6, 8, -1]) → [12, 16, 12, 16, -2]
doubling([]) → []
*/

import { assert } from "chai";
import { doubling } from "../src";

describe("doubling", () => {
  it("should return a doubled array when passed a list of numbers", () => {
    const result = doubling([1, 2, 3]);
    assert.deepEqual(result, [2, 4, 6]);
  });
  it("should return a doubled array when passed a list of numbers that inlcudes negative numbers", () => {
    const result = doubling([6, 8, 6, 8, -1]);
    assert.deepEqual(result, [12, 16, 12, 16, -2]);
  });
  it("should return an empty array when passed an empty array", () => {
    const result = doubling([]);
    assert.deepEqual(result, []);
  });
});
