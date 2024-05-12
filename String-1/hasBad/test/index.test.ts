import { assert } from "chai";
import hasBad from "../src";

// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. Note: use .equals() to compare 2 strings.

// hasBad("badxx") → true
// hasBad("xbadxx") → true
// hasBad("xxbadxx") → false

describe("hasBad", () => {
	it("Should return true if bad is in the first 4 characters of a string badxx", () => {
		const result = hasBad("badxx");
		assert.equal(result, true);
	});
	it("Should return true if bad is in the first 4 characters of a string badxxx", () => {
		const result = hasBad("badxxx");
		assert.equal(result, true);
	});
	it("Should return false if bad is in the first 4 characters of a string xxbadxx", () => {
		const result = hasBad("xxbadxx");
		assert.equal(result, false);
	});
});
