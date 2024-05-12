import { assert } from "chai";
import theEnd from "../src";

// Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

// theEnd("Hello", true) → "H"
// theEnd("Hello", false) → "o"
// theEnd("oh", true) → "o"

describe("theEnd", () => {
	it("Should return 'H' when given 'Hello' and true", () => {
		const result = theEnd("Hello", true);
		assert.equal("H", result);
	});
	it("Should return 'o' when given 'Hello' and false", () => {
		const result = theEnd("Hello", false);
		assert.equal("o", result);
	});
	it("Should return 'o' when given 'oh' and true", () => {
		const result = theEnd("oh", true);
		assert.equal("o", result);
	});
});
