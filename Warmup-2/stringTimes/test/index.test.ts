/*
Given a string and a non-negative int n, return a larger string that is n copies of the original string.

stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*/

import { assert } from "chai";
import { stringTimes } from "../src";

describe("stringTimes", () => {
  it("should return 'HiHi' when passed Hi and n = 2", () => {
    const result = stringTimes("Hi", 2);
    assert.equal(result, "HiHi");
  });
  it("should return 'HiHihI' when passed Hi and n = 3", () => {
    const result = stringTimes("Hi", 3);
    assert.equal(result, "HiHiHi");
  });
  it("should return 'Hi' when passed Hi and n = 1", () => {
    const result = stringTimes("Hi", 1);
    assert.equal(result, "Hi");
  });
});
