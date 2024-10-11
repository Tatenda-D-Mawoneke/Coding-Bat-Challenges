import { assert } from "chai";
import { has23 } from "../src/index.js";

/*

Given an int array length 2, return true if it contains a 2 or a 3.


has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false
*/

describe("has23", () => {
	it("Should return true when given [2,5]", () => {
		const result = has23([2,5]);
		assert.equal(result, true);
	});
	it("Should return true when given [4, 3]", () => {
		const result = has23([4, 3]);
		assert.equal(result, true);
	});
	it("Should return false when given [4, 5]", () => {
		const result = has23([4, 5]);
		assert.equal(result, false);
	});
});
