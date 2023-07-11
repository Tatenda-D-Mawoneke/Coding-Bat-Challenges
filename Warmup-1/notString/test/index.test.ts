import { assert } from "chai";
import { notString } from "../src";

// Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.

// notString("candy") → "not candy"
// notString("x") → "not x"
// notString("not bad") → "not bad"

describe("notString", () => {
  it("should return 'not candy' when the parameter value is 'candy'", () => {
    const result = notString("candy");
    assert.equal(result, "not candy");
  });
  it("should return 'not x' when the parameter value is 'x'", () => {
    const result = notString("x");
    assert.equal(result, "not x");
  });
  it("should return 'not candy' when the parameter value is 'not candy'", () => {
    const result = notString("not bad");
    assert.equal(result, "not bad");
  });
});
