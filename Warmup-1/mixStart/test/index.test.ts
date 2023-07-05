import { assert } from "chai";
import { mixStart } from "../src";
/*
Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.

mixStart("mix snacks") → true
mixStart("pix snacks") → true
mixStart("piz snacks") → false
*/

describe("mixStart", () => {
  it("should return true when string is 'mix snacks'", () => {
    const result = mixStart("mix snacks");
    assert.equal(result, true);
  });
  it("should return false when string is 'pix snacks'", () => {
    const result = mixStart("pix snacks");
    assert.equal(result, false);
  });
  it("should return false when string is 'piz snacks'", () => {
    const result = mixStart("piz snacks");
    assert.equal(result, false);
  });
  it("should return false when string is 'plz mix snacks'", () => {
    const result = mixStart("plz mix snacks");
    assert.equal(result, false);
  });
});
