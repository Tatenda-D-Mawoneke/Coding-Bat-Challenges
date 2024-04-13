import { assert } from "chai";
import { nonStart } from "../src";

// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.


// nonStart("Hello", "There") → "ellohere"
// nonStart("java", "code") → "avaode"
// nonStart("shotl", "java") → "hotlava"

describe("comboString", () => {
	it("Should return their concatenation, except omit the first char of each, returning 'hiHellohi' when given 'Hello' & 'hi'", () => {
    const string1 = "Hello"
    const string2 = "There"
    const result = nonStart(string1,string2)

    assert.equal("ellohere", result)
  });
	it("Should return their concatenation, except omit the first char of each, returning 'hiHellohi' when given 'Hello' & 'hi'", () => {
    const string1 = "java"
    const string2 = "code"
    const result = nonStart(string1,string2)

    assert.equal("avaode", result)
  });
	it("Should return their concatenation, except omit the first char of each, returning 'hiHellohi' when given 'Hello' & 'hi'", () => {
    const string1 = "shotl"
    const string2 = "java"
    const result = nonStart(string1,string2)

    assert.equal("hotlava", result)
  });

});

