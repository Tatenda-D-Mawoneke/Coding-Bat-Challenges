import { assert } from "chai";
import frontAgain from "../src";

// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

// frontAgain("edited") → true
// frontAgain("edit") → false
// frontAgain("ed") → true

describe("frontAgain", () => {
	it("Should return true when given 'edited'", () => {
		const result = frontAgain("edited");
		assert.equal(result, true);
	});
	it("Should return false when given 'edit'", () => {
		const result = frontAgain("edit");
		assert.equal(result, false);
	});
	it("Should return true when given 'ed'", () => {
		const result = frontAgain("ed");
		assert.equal(result, true);
	});
});
