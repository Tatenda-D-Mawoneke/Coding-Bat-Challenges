/*
Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.

backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"
*/

import { assert } from "chai";
import { backAround } from "../src";

describe("backAround", () => {
  it("should return tcatt when string is cat", () => {
    const result = backAround("cat");
    assert.equal(result, "tcatt");
  });
  it("should return oHelloo when string is Hello", () => {
    const result = backAround("Hello");
    assert.equal(result, "oHelloo");
  });
  it("should return aaa when string is a", () => {
    const result = backAround("a");
    assert.equal(result, "aaa");
  });
});
