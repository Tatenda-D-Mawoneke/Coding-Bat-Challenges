import { assert } from "chai";
import { frontBack } from "../src";

// Given a string, return a new string where the first and last chars have been exchanged.

// frontBack("code") → "eodc"
// frontBack("a") → "a"
// frontBack("ab") → "ba"

describe("frontBack", () => {
  it("should return 'eodc' when passed 'code", () => {
    const result = frontBack("code");
    assert.equal(result, "eodc");
  });
  it("should return 'a' when passed 'a", () => {
    const result = frontBack("a");
    assert.equal(result, "a");
  });
  it("should return 'ba' when passed 'ab", () => {
    const result = frontBack("ab");
    assert.equal(result, "ba");
  });
});
