/* 
Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"
*/

import { assert } from "chai";
import { missingChar } from "../src";

describe("missingChar", () => {
  it("should return ktten when n = 1", () => {
    const result = missingChar("kitten", 1);
    assert.equal(result, "ktten");
  });

  it("should return itten when n = 0", () => {
    const result = missingChar("kitten", 0);
    assert.equal(result, "itten");
  });

  it("should return kittn when n = 4", () => {
    const result = missingChar("kitten", 4);
    assert.equal(result, "kittn");
  });
});
