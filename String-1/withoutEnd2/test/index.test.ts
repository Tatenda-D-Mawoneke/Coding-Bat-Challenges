import { assert } from "chai";
import withouEnd2 from "../src";

// Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

// withouEnd2("Hello") → "ell"
// withouEnd2("abc") → "b"
// withouEnd2("ab") → ""

describe("withoutEnd2", () => {
	it("Should return ell when given Hello", () => {
		const result = withouEnd2("Hello");
		assert.equal(result, "ell");
	});
	it("Should return b when given abc", () => {
		const result = withouEnd2("abc");
		assert.equal(result, "b");
	});
	it("Should return '' when given ab", () => {
		const result = withouEnd2("ab");
		assert.equal(result, "");
	});
});
