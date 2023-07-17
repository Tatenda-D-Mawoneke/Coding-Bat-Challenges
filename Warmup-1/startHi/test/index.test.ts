/*
Given a string, return true if the string starts with "hi" and false otherwise.

startHi("hi there") → true
startHi("hi") → true
startHi("hello hi") → false
*/

import { assert } from "chai";
import { startHi } from "../src";

describe("startHi", () => {
  it("should return true when string starts with hi (hi There)", () => {
    const result = startHi("hi there");
    assert.equal(result, true);
  });
  it("should return true when string starts with hi (hi)", () => {
    const result = startHi("hi");
    assert.equal(result, true);
  });
  it("should return false when string doesn't starts with hi (hello hi)", () => {
    const result = startHi("hello hi");
    assert.equal(result, false);
  });
});
