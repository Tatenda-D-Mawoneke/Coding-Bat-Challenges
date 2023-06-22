// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false

import { assert } from "chai";
import { nearHundred } from "../src/index";

describe("nearHundred", () => {
  // n close to 100 by 10, n < 100
  it("should retrun true if n is within 100 by 10 when n < 100, n = 99", () => {
    const result = nearHundred(99);
    assert.equal(result, true);
  });

  // n close to 100 by 10, n > 100
  it("should retrun true if n is within 100 by 10 when n > 100, n = 109", () => {
    const result = nearHundred(109);
    assert.equal(result, true);
  });

  // n close to 200 by 10 , n < 200
  it("should retrun true if n is within 200 by 10 when n < 200, n = 199", () => {
    const result = nearHundred(199);
    assert.equal(result, true);
  });

  // n close to 200 by 10 , n > 200
  it("should retrun true if n is within 100 by 10 when n > 200, n = 209", () => {
    const result = nearHundred(209);
    assert.equal(result, true);
  });

  // n not close to 100 by 10, n < 100
  it("should retrun false if n is not within 100 by 10, n = 89", () => {
    const result = nearHundred(89);
    assert.equal(result, false);
  });

  // n not close to 100 by 10, n < 100
  it("should retrun false if n is not within 100 or 200 by 10, n = 189", () => {
    const result = nearHundred(189);
    assert.equal(result, false);
  });

  // n not close to 200 by 10, n < 200
  it("should retrun false if n is not within 200 by 10, n = 289", () => {
    const result = nearHundred(289);
    assert.equal(result, false);
  });
});
